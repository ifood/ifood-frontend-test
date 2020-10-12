import React from 'react';
import Modal from 'react-modal';
import { FaSpotify } from 'react-icons/fa';
import style from './styles.module.scss';


type Props = {
    name: string;
    cover: any;
    description: string;
    more: any;
    message: string;
    total: any;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '60%',
        width: '50%',
        border: 'none',
        paddingRight: '0px',
        paddingLeft: '0px',
        paddingTop: '0px',
        background: 'black',
        overflow: 'hidden',
    },
};

const CardPlaylist: React.FC<Props> = ({
    name,
    cover,
    description,
    more,
    message,
    total,
}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section className="col-12 col-md-4 col-lg-3 col-xxl-3 py-4">
            <div className={style.fundCardContainer}>
                <div className={style.fundCard}>
                    <button className="bg-transparent btn p-0" type="button" onClick={openModal} id="yourAppElement">
                        <img loading="lazy" src={cover.url} className="w-100 p-0" alt="Plataformas Cover" />
                    </button>
                </div>
            </div>
            <div>
                <Modal
                    id="yourAppElement"
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    <button className="close text-white pt-2 pr-4" type="button" onClick={closeModal}>X</button>
                    <div className="p-4 text-center align-middle">
                        <h2 className="text-white font-weight-bold font-size-5">{name}</h2>
                        <h4 className="pt-2 pb-4 font-size-7 text-white font-weight-light">{description}</h4>
                        <h4 className="pt-2 pb-4 font-size-7 text-white font-weight-light">Essa playlist tem {total.total} músicas</h4>
                        <a className="btn btn-outline-success btn-sm font-weight-bold font-size-7" href={more.spotify} target="_blank" rel="noopener noreferrer">Escute no Spotify <FaSpotify size={18} color='green' /></a>
                        <h4 className="pt-2 pb-4 font-size-7 text-white font-weight-light">{message}</h4>
                    </div>
                </Modal>
            </div>
        </section>
    );
};
export default CardPlaylist;
