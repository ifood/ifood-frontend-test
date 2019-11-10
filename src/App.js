import React from 'react'
import axios from 'axios'
import {

    CSSTransition

} from 'react-transition-group'

/* */

import Icons from 'components/Icon/Icons'
import Icon from 'components/Icon/Icon'
import Menu from 'layout/Menu/Menu'
import Header from 'layout/Header/Header'
import PlaylistList from 'components/Playlist/PlaylistList'
import Modal from 'components/Modal/Modal'

/* */

import styles from 'App.module.scss'

/* */

var auth = 'BQDCWyfb3XImLGbuPjui-a1F6wOmbKgv_fr_TMSTp4nCux2ODNR1atHf_Vt4bU9hAqQWDw2ahhTKsDC7gSU'

class App extends React.Component {

    constructor(){

        super()

        this.state = {

            wrapperScrollTop : 0,
            featured : {

                message : null,
                items: []

            },

            releases : {

                message : 'Lançamentos',
                items: []

            },

            viewport : {

                width: 0

            },

            settings : {

                active : false,
                data : {}

            }

        }

        /* */

        this.AppVierRef = React.createRef()

    }

    /* */

    async componentDidMount(){

        this.setViewportWidth()

        let viewportObserver = new ResizeObserver(entries => {

            let width = entries[0].contentRect.width

            if(this.state.viewport.width !== width) this.setViewportWidth(width)

        })

        viewportObserver.observe(this.AppVierRef.current)

        /* */

        await this.getFeaturedPlaylists()
        await this.getNewReleases()

    }

    /* */

    async getFeaturedPlaylists(){

        return axios.get('https://api.spotify.com/v1/browse/featured-playlists?locale=pt_BR&country=BR&limit=50', {

            headers : {

                Authorization: `Bearer ${auth}`

            }

        }).then(response => {

            let items = response.data.playlists.items.map(val => {

                return {

                    id: val.id,
                    title : val.name,
                    img : val.images[0].url,
                    owner : val.owner.display_name,
                    uri: val.uri || val.external_urls.spotify

                }

            })

            items.unshift({})

            /* */

            this.setState({

                featured : {

                    message : response.data.message,
                    items

                }

            })

        }).catch(error => {

            console.log(error)

        })

    }

    async getNewReleases(){

        return axios.get('https://api.spotify.com/v1/browse/new-releases?country=BR&limit=50', {

            headers : {

                Authorization: `Bearer ${auth}`

            }

        }).then(response => {

            let items = response.data.albums.items.map(val => {

                return {

                    id: val.id,
                    title : val.name,
                    img : val.images[0].url,
                    owner : val.artists.map(({ name }) => name).join(', '),
                    uri: val.uri || val.external_urls.spotify

                }

            })

            items.unshift({})

            this.setState({

                releases : {

                    ...this.state.releases,
                    items

                }

            })

        }).catch(error => {

            console.log(error)

        })

    }

    setViewportWidth(width){

        this.setState({

            viewport : {

                ...this.state.viewport,
                width: width ? width : this.AppVierRef.current.offsetWidth

            }

        })

    }

    handleWrapperScroll(e){

        this.setState({

            wrapperScrollTop: e.target.scrollTop

        })

    }

    openSettings(){

        this.setState({

            settings : {

                ...this.state.settings,
                active : true

            }

        })

    }

    closeSettings(){

        this.setState({

            settings : {

                active : false,
                data : {}

            }

        })

    }

    /* */

    render(){

        /* */

        return (

            <div className={ styles.App }>

                <Icons />

                <div

                className={ styles.AppWrapper }

                onScroll={ e => this.handleWrapperScroll(e) }

                >

                    <Header

                    opaque={ this.state.wrapperScrollTop > 10 }

                    openSettings={ () => this.openSettings() }

                    />

                    <div className={ styles.AppView } ref={ this.AppVierRef }>

                        <Icon glyph="logo-play-button" className={ styles.AppViewBackground } />

                        <PlaylistList data={ this.state.featured } viewport={ this.state.viewport.width } />
                        <PlaylistList data={ this.state.releases } viewport={ this.state.viewport.width } />

                    </div>

                </div>

                <CSSTransition

                in={ this.state.settings.active }
                timeout={ 200 }
                classNames="transition-fade"
                unmountOnExit

                >

                    <Modal title="Preferências" col="6" onClose={ () => this.closeSettings( )}>

                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem, in aut quasi consectetur ex harum, eum at quia tempore nostrum iure tenetur, ab, perferendis illum veritatis nisi iusto cupiditate.</div>
                            <div>Autem veniam ratione quibusdam, aliquid id sequi quidem ipsam aspernatur doloribus voluptatibus nisi provident molestias quasi tempora, quisquam quia repudiandae dolorem asperiores quod porro cupiditate, modi explicabo vel consequuntur! Sapiente.</div>
                            <div>Vel a recusandae voluptatem incidunt, sit quae, alias quisquam. Nam, voluptas voluptatem eos quos reprehenderit aliquam molestiae consequatur error optio facilis sequi. Rerum explicabo laudantium facere minima, esse nemo, beatae.</div>
                            <div>Ab rerum, officiis repudiandae deleniti laboriosam minima possimus dignissimos sit omnis excepturi quibusdam, suscipit impedit vero nihil eius laborum ipsum aperiam necessitatibus doloribus explicabo odio delectus. Nam ipsum sapiente odit.</div>
                            <div>Tenetur maiores delectus voluptatem sapiente pariatur dolore, nemo facere labore possimus qui debitis voluptate numquam ad nihil modi rem totam. Excepturi repellendus natus sequi, pariatur quidem illum saepe commodi debitis.</div>
                            <div>Amet suscipit doloremque harum culpa facere quia voluptate accusamus, saepe, quam impedit eos, rerum reprehenderit in nobis animi porro qui aperiam natus dolores quos dignissimos debitis obcaecati explicabo! Consectetur, culpa.</div>
                            <div>Animi porro repudiandae voluptatum sed laborum explicabo reiciendis ducimus rerum quas itaque, iusto architecto, praesentium. Quis exercitationem maxime, omnis, iusto esse vel ipsam quam, quos optio voluptates incidunt. Repudiandae, nemo?</div>
                            <div>Esse, quo. Porro ad, dolorum tempore amet repellendus vero. Aliquid tempore sed, nulla possimus esse asperiores perferendis, amet voluptatibus facilis recusandae placeat similique iusto dolores. Eius sunt ipsa, delectus ab.</div>
                            <div>Ea dignissimos suscipit nemo porro sunt unde adipisci aperiam quos, dolor ex deserunt, laboriosam quam, molestiae iusto minima soluta inventore, officiis culpa. Corporis perferendis ad hic at suscipit expedita. Minima.</div>
                            <div>Doloremque fugiat placeat aspernatur sint? Facere molestias libero harum placeat inventore, odio quibusdam ratione, animi officiis perspiciatis expedita repellendus. Non explicabo magnam culpa in incidunt voluptas odio error iure suscipit!</div>
                            <div>Laborum incidunt, odit alias molestiae et culpa deleniti fugiat earum dolor. Eum amet fugiat blanditiis ipsum fugit eaque, optio excepturi quidem quod accusantium sed id, maiores ut vero assumenda error.</div>
                            <div>Maiores odit sed, at quisquam similique, consequatur explicabo iste sequi a, quam laudantium ullam assumenda. Voluptatem laudantium dolorem excepturi voluptates illo tempora, sapiente maxime, ab quod facilis amet quibusdam. Magnam.</div>
                            <div>Illo adipisci repudiandae maiores ut a modi neque, excepturi odit in accusamus dicta sint officiis libero ea porro perspiciatis dolor cumque officia. Perferendis eos veniam, distinctio hic ratione! Molestiae, saepe!</div>
                            <div>Dicta eum fugit distinctio ipsa suscipit nisi, tenetur dolore autem doloremque porro harum, officiis eos consectetur sequi cupiditate assumenda quia quod cumque animi minus inventore, eius odio, blanditiis possimus. Non.</div>
                            <div>Alias hic cumque possimus a iure, perferendis maiores omnis maxime nihil error ratione repellendus, voluptatum rem quisquam officia temporibus. Similique magnam libero ipsum rerum molestias eveniet nam nesciunt obcaecati, soluta?</div>
                            <div>Quas atque deleniti aliquam nostrum dicta, quis distinctio assumenda! Dolores sequi iusto, unde consequuntur, aperiam laborum perferendis cum earum asperiores autem, accusamus, laudantium debitis facere modi aut? Enim delectus, repellendus.</div>
                            <div>Reprehenderit alias rem dolorem excepturi unde repellat nam ex corrupti dicta illo repudiandae vel laudantium animi, ad, quo vero. Tempore odit quae, deserunt voluptatum perferendis adipisci deleniti maiores explicabo illum.</div>
                            <div>Cumque, non atque at itaque, mollitia corporis eum, quasi tempora error necessitatibus dignissimos quia possimus molestiae delectus voluptatem aliquam totam doloribus quos eveniet nisi unde veniam quis rem! Ipsam, ea.</div>
                            <div>Commodi in odio accusantium sequi cum reiciendis atque consequuntur, vitae quibusdam quisquam expedita, ea corporis incidunt nulla illo molestias dignissimos facere, aperiam architecto quia voluptatum perferendis modi ad. Adipisci, necessitatibus!</div>
                            <div>Atque deserunt inventore eligendi in, et exercitationem veniam. Commodi porro iusto odio aliquam obcaecati molestias fugiat cum quaerat quasi omnis perferendis, ipsam itaque, architecto voluptates praesentium provident totam veritatis debitis?</div>
                            <div>Excepturi voluptatibus nobis ipsa porro consectetur, officia illo nesciunt, suscipit doloribus temporibus rem soluta praesentium aspernatur. Labore architecto officia eius pariatur iusto delectus vitae adipisci in, aliquam illo aliquid nobis.</div>
                            <div>Cupiditate magnam pariatur laudantium excepturi aperiam voluptatem minus doloremque, quas corporis vero delectus impedit ipsum! Non, libero repellat. Obcaecati possimus quibusdam, a iure ipsa ut vero velit sunt est neque.</div>
                            <div>Commodi ipsum magni pariatur aperiam eos unde fuga voluptatem culpa esse placeat vel numquam recusandae velit consectetur dolorum quas ullam libero repellendus a, eaque! Repellendus delectus, ullam laboriosam nam nemo!</div>
                            <div>Commodi, ab vero explicabo consequatur beatae perspiciatis, laudantium aut aliquid id, temporibus ratione. Et nisi cupiditate inventore ex aliquam consequuntur molestias distinctio officiis cumque accusantium, sequi accusamus ratione non nulla!</div>
                            <div>Magni deserunt eum eveniet, nesciunt molestias fugiat esse. Nihil et numquam aperiam officia asperiores sapiente dolores iste voluptates officiis, placeat eos totam omnis mollitia earum, minus, impedit dolore dolor saepe!</div>
                            <div>Voluptatibus et eaque, laudantium officiis, culpa earum commodi! Obcaecati, similique aliquid fuga, consequatur iste aut inventore minima totam esse consectetur quis amet hic facere eligendi dicta natus dolore provident veniam.</div>
                            <div>Vel incidunt sit similique molestiae harum omnis voluptates consectetur ad, hic? Sed incidunt culpa, molestias aliquid aperiam cum voluptatum delectus quam a atque sint ab velit error laborum, dolores cupiditate.</div>
                            <div>Et voluptate obcaecati quod, reiciendis, ducimus, eos aperiam, unde sed nisi qui harum. Unde dignissimos quasi numquam expedita quidem fugit, maxime, repellat rerum harum enim, consequuntur dolores similique illum provident!</div>
                            <div>Quaerat unde explicabo quibusdam accusantium magnam molestias modi assumenda impedit repudiandae fugiat. Facilis earum voluptatem modi ut perferendis, reprehenderit, enim cum iure aspernatur iusto autem voluptatibus molestias debitis architecto veritatis?</div>
                            <div>Necessitatibus totam ad esse, eum quaerat porro sapiente. Fuga dolorum, voluptas enim iste voluptatum, vel molestias dolore explicabo expedita sed. Animi nemo, unde aliquam maiores doloremque accusamus labore, dignissimos magni!</div>
                            <div>Vitae sed numquam dolores eius rem ut. Quo optio aut maxime voluptatum ab harum nesciunt architecto repudiandae quae corporis ut, odit minima quas obcaecati error nisi rem, dolore suscipit earum!</div>
                            <div>Architecto a officia tempora ipsa itaque ex molestias, quis fugit doloribus. Id deserunt blanditiis ratione inventore voluptatum porro quia dolorum perspiciatis dolores, ipsum fugiat, quasi nihil ipsa doloremque. Neque, perspiciatis!</div>
                            <div>Aut autem iste deserunt distinctio reiciendis eligendi, incidunt quas, voluptates facilis ducimus consectetur quos ullam facere mollitia nobis? Veniam, ad praesentium vitae nesciunt enim ducimus totam repellat harum ea officiis.</div>
                            <div>Consectetur cum nulla, minus quo, tempora iusto! Voluptas sequi ea nostrum fugiat. Maiores eos veniam voluptates ipsa! Sit suscipit voluptatibus explicabo, est neque cumque deserunt quas mollitia dignissimos quibusdam eius.</div>
                            <div>Blanditiis assumenda ab ut soluta aliquam aperiam, voluptatem doloribus totam reprehenderit, pariatur minima tempore voluptatum mollitia. Assumenda labore, distinctio deserunt consequatur beatae, totam, dolore quisquam quaerat doloremque explicabo facilis nam.</div>
                            <div>Nam, quasi amet? Aperiam, quas, impedit. Reiciendis assumenda cumque eius optio officia, sit? Aperiam sunt ad voluptatibus quasi ipsum dolorum, dignissimos suscipit quos atque quidem itaque sapiente qui cumque repellat.</div>
                            <div>Eaque velit facere necessitatibus cum veritatis accusamus, assumenda rerum fugiat sed esse blanditiis quaerat atque labore! Amet natus, hic corporis ipsa quibusdam explicabo, eum autem harum mollitia officia dolore repellat.</div>
                            <div>Aperiam laborum sit cum culpa consequatur asperiores deserunt quas velit quisquam, voluptatibus nostrum animi nam temporibus minus quo dolore obcaecati perferendis, quod cupiditate quidem facilis distinctio, ipsam aliquid quae. Sequi.</div>
                            <div>Modi perspiciatis ipsa dignissimos impedit numquam. Ullam dolorum, laborum necessitatibus id nesciunt sunt corrupti culpa nisi iure. Quis, quasi vitae quam esse quidem accusamus? Possimus maxime libero, fugit voluptas quam?</div>
                            <div>Maiores animi accusamus numquam magnam sunt reprehenderit et, exercitationem architecto aliquid mollitia, perferendis odit facilis adipisci ipsum dicta praesentium expedita provident. Maiores tenetur eveniet laudantium non, voluptate minima fuga ipsa.</div>
                            <div>Necessitatibus nemo sunt velit repellat. Quibusdam doloribus quidem suscipit officiis? Aliquam non obcaecati labore deserunt nam magni, eos qui modi, sapiente inventore recusandae, sequi aut officiis voluptatem deleniti facere unde!</div>
                            <div>Odio voluptates, eligendi sapiente, reiciendis rerum repellat totam ipsam amet provident tempore illo commodi placeat, assumenda excepturi molestiae itaque, optio architecto facere fugit debitis. Vel est, nostrum odit iure labore.</div>
                            <div>Maxime animi reprehenderit ut minima architecto pariatur, laborum deserunt! Est, officia. Blanditiis exercitationem ducimus impedit vero deleniti, voluptatem, aliquid, placeat provident, illo numquam quisquam nobis tenetur! Voluptatum consequuntur optio veniam.</div>
                            <div>Labore perferendis nobis totam illo eligendi incidunt alias ea nam sit sapiente, facilis error quo maiores nesciunt culpa, ullam? Enim molestias libero animi, voluptas minima assumenda sunt quaerat quia recusandae?</div>
                            <div>Vel impedit fuga quibusdam excepturi quod provident repellendus suscipit molestiae explicabo quaerat sint, ipsum. Dignissimos consequuntur odit beatae, modi. Ipsum modi eius molestias nemo, sequi eligendi quod quibusdam id, impedit.</div>
                            <div>Esse libero, ad sed itaque. Maiores nihil, minima magnam facilis animi commodi reiciendis, harum fugit neque voluptatem consectetur tenetur nulla atque eligendi nisi rem laboriosam, ad ipsa aliquam cupiditate. Obcaecati!</div>
                            <div>Vel itaque consequuntur, delectus alias qui odio optio architecto repudiandae iste numquam nemo hic sit neque quod pariatur ex dicta accusamus dolor quia. Magni perspiciatis accusantium quos nihil nisi delectus.</div>
                            <div>Cumque, veritatis quasi ducimus voluptates deserunt sunt necessitatibus suscipit vero impedit id. Error quas magni, illo praesentium totam unde nesciunt, iure blanditiis animi earum a veritatis id repudiandae! Soluta, ullam!</div>
                            <div>Incidunt dolor ut cum adipisci alias, officiis ea labore natus maxime eum quis expedita debitis est illum commodi libero soluta, assumenda. In excepturi, soluta. Facilis at, perferendis maiores nihil illum.</div>
                            <div>Sunt quod repellendus labore ipsam id ab beatae nostrum temporibus eos sequi cum ut corrupti nesciunt, modi commodi ad similique. In pariatur nihil modi quaerat nobis sed asperiores officia necessitatibus.</div>
                            <div>Quo voluptatum, nemo dolore illum vero omnis eum perspiciatis porro sit, aperiam ipsum? Assumenda, quo quibusdam porro, tenetur qui placeat illum provident, vitae labore, cumque ipsum maiores. Corporis ipsum, pariatur.</div>
                            <div>Tempora nostrum nam minima ducimus accusamus vitae mollitia accusantium eius possimus repellat. Fugit autem quidem voluptates, reprehenderit maxime quisquam ex illo ipsa ratione omnis, sapiente, sunt ea similique, eum animi.</div>
                            <div>Fuga quidem deserunt iusto necessitatibus, debitis unde eveniet, quas, odio eius omnis perferendis? Repellat incidunt vero vitae provident beatae, alias iusto libero sunt enim, error nostrum officia quidem, quas dolore?</div>
                            <div>Asperiores repellat eveniet vero fugit quidem cum, nemo tempora ipsa, hic dolorum libero doloremque obcaecati soluta explicabo ab cupiditate. Nisi ipsum sed necessitatibus pariatur beatae eos soluta, quasi temporibus rerum?</div>
                            <div>Natus ipsa consequuntur officia qui, illum dolore deleniti porro, reprehenderit aliquid cupiditate quos nisi nobis. Dolores ipsa inventore rem, numquam repellendus quisquam delectus ipsum harum illo ratione, fugit nesciunt iste!</div>
                            <div>Fuga tempora ipsam cum iusto rem delectus deserunt molestiae, corrupti vero iure alias quos provident necessitatibus quas recusandae harum, tenetur doloremque, voluptates minus nobis. Tempore, eius iusto numquam omnis maxime.</div>
                            <div>Deserunt quasi culpa molestiae sapiente voluptatem, at, nemo fugit, harum ipsum, quod totam! Nisi repudiandae magni aliquid, tenetur beatae cumque, voluptatibus debitis alias explicabo veritatis atque omnis eius tempora vero.</div>
                            <div>Inventore cupiditate neque eaque fuga laudantium vitae nostrum deserunt officiis quo nihil beatae repudiandae ab recusandae, velit commodi iure consectetur eius. Tenetur, quaerat veniam aliquid, eos sint aliquam earum ad!</div>
                            <div>Dolores repudiandae corrupti placeat hic repellat, nihil. Dolores harum est odio officiis voluptates. Magnam illo repellat ullam, harum architecto in ipsam itaque perferendis atque ut unde eos quasi. Pariatur, quasi.</div>
                            <div>Ab odio dignissimos cupiditate cumque suscipit itaque modi minima in aspernatur voluptates perspiciatis neque pariatur accusamus deleniti, beatae nobis fugiat quas cum fugit quasi dolorum! Quod nam, repellendus nesciunt? Minus.</div>
                            <div>Repudiandae repellat non quia officiis perferendis natus fugiat, porro, animi, laboriosam fugit laudantium. Harum debitis tempore deleniti delectus, ipsa soluta labore eaque illum, nulla nesciunt, itaque dolorem! Vel, reprehenderit quaerat!</div>
                            <div>Excepturi, architecto reiciendis veritatis tempora voluptate voluptatem fugit quasi voluptatum voluptatibus corrupti iste expedita, assumenda dolorem autem veniam velit. Nesciunt molestias ipsum nemo, magni, repudiandae excepturi laboriosam totam pariatur earum?</div>
                            <div>Minima distinctio repellendus laborum cupiditate dolores eum nobis deserunt consequatur, repellat blanditiis! Doloribus nostrum deleniti iure et delectus nemo molestiae autem sint recusandae, tenetur cumque tempora perspiciatis. Fugiat, labore, quia!</div>
                            <div>Blanditiis tempore vero amet accusantium soluta excepturi, sapiente placeat recusandae quasi reiciendis eos, nihil dolores iure mollitia quisquam veritatis aut totam error explicabo sit, beatae? Facere, consectetur ipsam officia consequuntur!</div>
                            <div>Et inventore dignissimos laudantium officiis quia quaerat, nesciunt exercitationem dicta. Dignissimos voluptatum provident vel, inventore unde quisquam hic ipsam enim praesentium culpa eius repellat, magnam, labore alias. Quam enim, ex?</div>
                            <div>Aperiam, expedita, perspiciatis! Odio, error excepturi corporis nobis, deleniti neque explicabo, cupiditate fugiat nam adipisci aspernatur facere quasi magnam architecto laudantium beatae? Minus ipsa quibusdam ratione laborum in quam, hic.</div>
                            <div>Distinctio magni quidem nemo molestiae asperiores. Soluta ipsa hic consequatur cumque quidem nostrum non doloremque minus, impedit, cum fuga. At voluptate laudantium ad delectus temporibus natus nihil error est, dolorem.</div>
                            <div>Laborum omnis sint, nesciunt praesentium illum ea obcaecati earum error quibusdam, quod temporibus molestiae eum ab totam doloribus culpa dolor, esse placeat! Excepturi ratione libero officia soluta magnam, nam, deserunt.</div>
                            <div>Perferendis dignissimos adipisci eius autem libero sequi architecto voluptates cum cumque veritatis cupiditate ullam, esse maiores non ipsa modi, tenetur doloremque aspernatur? Facere sed commodi sit est, eaque quia vero.</div>
                            <div>Temporibus, ducimus tempora, explicabo ea dicta saepe delectus est aut et reiciendis vitae nihil obcaecati. Iusto nobis exercitationem ullam voluptatem, placeat distinctio similique suscipit magni quod nostrum nisi aliquid mollitia?</div>
                            <div>Aliquam, error nemo! Eos iure aliquid ducimus obcaecati, numquam ipsum eveniet dolor voluptates nisi cupiditate maiores voluptatibus minima sunt saepe natus tenetur repudiandae dolores fugit deserunt nobis iste blanditiis. Facilis.</div>
                            <div>Natus nesciunt laboriosam quia soluta atque a nihil vel recusandae dolore voluptatem. Sint iusto possimus perspiciatis et. Expedita, laboriosam. Beatae sapiente eos assumenda fugit itaque obcaecati, dolores soluta? Doloremque, nostrum!</div>
                            <div>Alias nostrum doloremque quam asperiores velit eos quisquam ipsum, quasi quidem quia reiciendis, facere soluta est fugit quibusdam animi dignissimos natus provident doloribus iste. Perferendis, velit accusamus ipsum doloremque voluptatum!</div>
                            <div>Provident earum, rerum hic at corporis quis unde quaerat excepturi porro dolorem natus corrupti iste ad labore quibusdam. Nam nihil, nulla molestias laboriosam dolor, harum ad provident repellat perferendis inventore?</div>
                            <div>Nulla nam ad temporibus saepe obcaecati, animi laboriosam corrupti exercitationem distinctio. Aliquid similique eveniet incidunt repudiandae, pariatur officiis rerum maxime, maiores, vero dolores et repellendus nemo ad id nisi quibusdam.</div>
                            <div>Eaque a voluptatibus, aperiam distinctio aliquam officia temporibus voluptatem dolorem porro, quibusdam saepe doloremque dolore velit quas eius debitis molestias ratione at quia minus animi. Totam quisquam velit, temporibus hic.</div>
                            <div>Sed eveniet quo molestias ratione, similique modi necessitatibus reprehenderit voluptatibus quidem recusandae beatae voluptas culpa eum dolor natus architecto veniam maiores accusamus maxime dicta! Veritatis nulla porro corporis quidem aliquid.</div>
                            <div>Repudiandae aut nobis dolorum quod commodi nam, rerum, quasi reiciendis ea ad quibusdam nihil sed repellendus cumque corrupti voluptatibus placeat asperiores. Tenetur rerum corporis, facere consequuntur commodi amet unde officiis.</div>
                            <div>Modi quae, ipsum nesciunt recusandae nemo odit numquam ut tempore tempora libero deserunt aspernatur in alias cumque obcaecati assumenda consequatur quos. Quod accusamus enim ipsam quaerat excepturi in rerum at.</div>
                            <div>Id ab mollitia assumenda praesentium fuga provident minima a laudantium reiciendis veritatis at vero, velit ducimus incidunt dolor, sequi explicabo laboriosam animi deserunt eum labore veniam itaque eaque. Explicabo, accusamus.</div>
                            <div>Veniam nam ducimus fugiat vel delectus recusandae ipsa repudiandae similique, ad fugit commodi, reprehenderit, voluptas pariatur illum. Est illo neque labore dolorum impedit a! Modi alias blanditiis, dignissimos reiciendis adipisci.</div>
                            <div>Quis cupiditate enim tempora fugit officia obcaecati, distinctio eum quia reprehenderit porro aliquid commodi nemo ratione dolor veniam, iste odio non, dolore maxime provident sit recusandae. Dolorum molestias, maiores eos.</div>
                            <div>Odio quisquam est vel ab labore necessitatibus, quasi facere omnis? Sapiente nulla beatae cupiditate impedit fugit aliquam et voluptas, natus, velit mollitia expedita? Possimus suscipit, inventore repellendus. Dolores, minima, placeat.</div>
                            <div>Quod perspiciatis, sunt soluta amet officiis laudantium dolor suscipit odit labore praesentium natus, eos tempora harum doloremque laboriosam iste velit sequi illum neque ad rem, placeat. Esse enim non placeat.</div>
                            <div>Deleniti iusto voluptate perferendis repudiandae magni fugit recusandae aliquid debitis voluptas, quisquam sed in omnis est qui explicabo quod beatae dolorum earum laborum ut, laboriosam neque, impedit veritatis assumenda. Iusto.</div>
                            <div>Pariatur eligendi qui sit alias voluptas voluptatem consequuntur, provident rem, voluptate cum expedita ex quam velit. Dolores quia velit beatae ratione ab, facilis dolore nemo quis est nam officia tenetur.</div>
                            <div>Eaque optio et voluptas enim delectus corporis, doloribus esse dolorem libero architecto culpa tempore, aliquid, quidem incidunt, possimus molestias ad vero eveniet qui mollitia praesentium tempora sapiente. Eveniet, quasi sunt!</div>
                            <div>Consequuntur vero voluptate quasi, placeat dolor, doloremque at pariatur debitis accusamus possimus, perspiciatis hic dignissimos atque sint, tempora doloribus earum. Accusantium amet mollitia iste dolor suscipit, enim voluptatum, perspiciatis reprehenderit!</div>
                            <div>Expedita omnis tempore nihil numquam atque repellendus illum harum, explicabo suscipit praesentium iure, ut, non recusandae repellat? Nostrum velit qui, tenetur aperiam labore soluta fuga adipisci, ab, ducimus quae eum.</div>
                            <div>Quasi nisi dolorem vel, itaque nobis necessitatibus, eum amet eveniet ipsum. Rem nisi dignissimos maxime mollitia unde animi exercitationem impedit veniam officia repellendus distinctio, autem necessitatibus, ab a voluptatum reprehenderit!</div>
                            <div>Quis vel ipsa beatae qui eligendi harum dignissimos veniam rem voluptates voluptatibus labore vitae quasi, saepe dolorum minima odio doloremque officiis impedit ea voluptate repellendus. Dolore ipsam sit, explicabo et.</div>
                            <div>Alias quia est eveniet doloribus, fugit nisi possimus velit facere tempora id deserunt, praesentium harum quasi vero dicta, sequi dolores tenetur in magni dolor. Soluta excepturi voluptate, iusto iste atque.</div>
                            <div>Quaerat praesentium repudiandae facilis voluptas, debitis inventore atque, error placeat accusantium totam nemo vero consequatur laudantium, corporis in iusto maxime? Quam necessitatibus est velit commodi doloremque odio non sint vero.</div>
                            <div>Praesentium et alias quibusdam molestiae! Saepe repudiandae voluptas consectetur sequi voluptatum dolorum incidunt assumenda, in. Ratione similique architecto illo consequuntur rem ipsam accusantium cupiditate culpa atque praesentium. Cupiditate harum, natus.</div>
                            <div>Nesciunt minima rerum corporis ab, necessitatibus possimus quaerat soluta nulla accusamus consequuntur, aliquam et doloremque, nostrum nihil perspiciatis error veritatis in sint quae. Quas laudantium, officiis cum non delectus qui.</div>
                            <div>Molestiae reiciendis voluptatibus ipsum? Officia, placeat at. Blanditiis, quas ipsam sequi maxime hic vel commodi optio quisquam, quae repudiandae porro, autem, sit omnis voluptas magnam dolore? Vitae earum, exercitationem aliquam!</div>
                            <div>Deserunt, dolores dolor labore quo repudiandae qui illo assumenda optio eius consequuntur unde, quae eum nostrum iure quod ab et minima eligendi fugit deleniti eaque neque similique nobis? Nobis, ratione!</div>
                            <div>Laboriosam vitae soluta, assumenda magnam consequuntur. Molestias aliquid incidunt ea dolorum voluptate ipsum ut temporibus! Aliquam, nam eum laudantium accusamus at odio quos, quo quaerat, distinctio, reprehenderit officiis aliquid vero.</div>
                            <div>Quisquam rerum, excepturi similique ipsum impedit, blanditiis! Cum labore ullam perspiciatis fugit recusandae ea impedit enim vel nemo ipsam eligendi est rem, sit, eius praesentium reprehenderit doloremque, eveniet aperiam dignissimos!</div>
                            <div>Repudiandae atque aut, vero expedita quibusdam sapiente nostrum, nemo recusandae sint libero cumque. Architecto velit vitae aliquid rem est eum corporis necessitatibus soluta facere, accusantium tenetur impedit deserunt, quos repellat?</div>

                        </Modal>

                </CSSTransition>

            </div>

        )

    }

}

export default App
