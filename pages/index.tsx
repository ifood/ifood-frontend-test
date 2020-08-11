import { Select, DatePicker, InputNumber } from 'antd'

const { Option } = Select

function handleChange(value: string) {
  console.log(`selected ${value}`)
}

function onChange(date, dateString) {
  console.log(date, dateString)
}

const Index = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Locale</label>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

      <label>Country</label>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

      <label>Date</label>
      <DatePicker style={{ width: 120 }} onChange={onChange} />

      <label>Limit</label>
      <InputNumber style={{ width: 120 }} min={1} max={50} />

      <label>Quantity</label>
      <InputNumber style={{ width: 120 }} />
    </div>
  )
}

export default Index
