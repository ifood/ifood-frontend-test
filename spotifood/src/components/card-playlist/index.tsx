/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Modal from 'react-modal';
import style from './styles.module.scss';

type Props = {
    name: string;
    cover: any;
    description: string;
    videoUrl: string;
    more: any;
    keys: string;
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
        width: '100%',
        border: 'none',
        paddingRight: '0px',
        paddingLeft: '0px',
        paddingTop: '0px',
        paddingBottom: '40px',
        background: 'black',
        overflow: 'hidden',
    },
};

const PlatformsCard: React.FC<Props> = ({
    name,
    cover,
    description,
    videoUrl,
    more,
    keys,
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
        <section className="col-12 col-lg-4 col-xxl-3">
            <div className={style.fundCardContainer}>
                <div className={style.fundCard}>
                    <button className="bg-transparent btn p-0" type="button" onClick={openModal} id="yourAppElement">
                        <img loading="lazy" src={cover.url} className="w-100 p-0" alt="Plataformas Cover" />
                    </button>
                    <div className="p-4">
                        <h2 className="text-dark font-weight-bold font-size-5">{name}</h2>
                        <h4 className="pt-2 pb-4 font-size-7 text-gray-dark font-weight-light">{description}</h4>
                        <a className="w-100 btn btn-outline-primary btn-sm font-weight-bold font-size-7" href={more.spotify}>Saiba mais</a>
                        <h4 className="pt-4 font-size-9 text-gray-dark font-weight-light">{keys}</h4>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    id="yourAppElement"
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Video Modal"
                >
                    <button className="close text-white pt-2 pr-4" type="button" onClick={closeModal}>X</button>
                    <iframe
                        title="Platforms video"
                        src={`${videoUrl}?autoplay=1&autopause=0`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </Modal>
            </div>
        </section>
    );
};
export default PlatformsCard;
