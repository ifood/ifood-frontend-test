import React, { useState } from 'react'
import { number as yupNumber } from 'yup'
import DatePicker, { registerLocale } from "react-datepicker"
import ptBR from 'date-fns/locale/pt-BR'
registerLocale('pt-BR', ptBR)
export const Filters = ({ filters, UpdatePlaylist }) => {

    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [date, setDate] = useState(new Date())

    const getFilterObj = (id) => {
        return filters.find(filter => id === filter.id)
    }

    const CustomInput = ({ value, onClick }) => (
        <button className="w-full shadow border-2 text-left text-gray-500 border-gray p-3" onClick={onClick}>
            {value}
        </button>
    )
    
    function getErrorByKey(key) {
        if (!formErrors || Object.keys(formErrors).length === 0) {
            return null
        }
        const error = formErrors[key]
        console.log('error', error)
        if (!error) {
            return null
        }
        return error
    }

    function handleChangeDate(date) {
        const dateFilter = { 'timestamp': date.toISOString() }
        setFormData(dateFilter)
        UpdatePlaylist(dateFilter)

    }

    function renderError(key) {
        const error = getErrorByKey(key)
        return error && <div className="flex text-xs">{error}</div>
    }

    function handleChangeOffset(key, inputValue) {
        const newObj = (inputValue ? { [key]: inputValue } : { [key]: 0 })
        setFormData({ ...formData, ...newObj })
        UpdatePlaylist({ ...formData, ...newObj })

    }

    function handleChangeSelect(key, inputValue) {
        if (inputValue !== 'nofilter') {

            setFormData({ ...formData, [key]: inputValue })
            UpdatePlaylist({ ...formData, [key]: inputValue })

        } else {
            const aux = delete formData[key]
            setFormData({ ...aux })
            UpdatePlaylist({ ...aux })
        }

    }
    async function handleChangeLimit(key, inputValue) {
        const filterObj = getFilterObj(key)
        const newObj = (inputValue ? { [key]: inputValue } : { [key]: filterObj.validation.max })

        setFormErrors({ [key]: '' })
        setFormData({ ...formData, ...newObj })

        const filterSchema = yupNumber()
            .nullable()
            .max(filterObj.validation.max, "Digite um valor entre 1 e 50")
            .min(filterObj.validation.min, 'Digite um valor entre 1 e 50')
            .transform((value, originalValue) => originalValue.trim() === "" ? null : value);

        try {
            await filterSchema.validate(inputValue, { abortEarly: false })
            UpdatePlaylist({ ...formData, ...newObj })

        }
        catch (e) {
            console.log('err', e)
            return setFormErrors({ [key]: e.message })
        }
    }
    return (
        <div>
            <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 w-full gap-2 ">
                <div className='flex flex-col'>
                    <div className={`w-full  ${getErrorByKey('limit') && 'border-2 border-red-500'} `}>
                        <input type="number" min="1" max="50" onChange={event => handleChangeLimit('limit', event.target.value)} className={`w-full shadow rounded border-2  p-3 ${getErrorByKey('limit') && 'outline-none border-none'}`} placeholder="Quantidade" />
                    </div>
                    {renderError('limit')}
                </div>

                <div className="w-full ">
                    <input type="number" min='0' onChange={event => handleChangeOffset('offset', event.target.value)} className="w-full shadow rounded border-2 p-3" placeholder="Página" />
                </div>
                <div>
                <select
                    onChange={(event) => handleChangeSelect('locale', event.target.value)}
                    className="shadow w-full bg-white border-2 text-gray-500 p-3 pr-8 focus:shadow-outline focus:outline-none "
                >
                    <option value={'nofilter'}>Selecionar idioma</option>
                    {getFilterObj('locale').values.map(locale =>
                        <option value={locale.value}>{locale.name}</option>
                    )}
                </select>
                </div>
                <div>

                <select
                    onChange={(event) => handleChangeSelect('country', event.target.value)}
                    className="shadow w-full bg-white border-2 text-gray-500 p-3 pr-8 focus:shadow-outline focus:outline-none "
                >
                    <option className="text-gray-500  p-3 " value={'nofilter'}>Selecionar país</option>
                    {getFilterObj('country').values.map(locale =>
                        <option className="text-gray-500 " value={locale.value}>{locale.name}</option>
                    )}
                </select>
                </div>


              
                <div className="hidden lg:w-full lg:grid lg:grid-col-1 md:w-full md:grid md:grid-col-1">
                    <DatePicker
                        customInput={<CustomInput />}
                        onChange={date => handleChangeDate(date)}
                        selected={date}
                        showTimeSelect
                        timeFormat="HH:mm"
                        locale="pt-BR"
                        timeFormat="p"
                        dateFormat="Pp"
                    />
                </div>


            </div>
            <div className="w-full md:hidden lg:hidden grid grid-col-1 mt-2">

                <DatePicker
                    customInput={<CustomInput />}
                    onChange={date => handleChangeDate(date)}
                    selected={date}
                    showTimeSelect
                    timeFormat="HH:mm"
                    locale="pt-BR"
                    timeFormat="p"
                    dateFormat="Pp"
                />

            </div>

        </div>
    )
}


export default Filters

