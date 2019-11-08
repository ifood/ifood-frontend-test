import React from 'react'

/* */

import Icons from 'components/Icon/Icons'
import Menu from 'layout/Menu/Menu'
import Header from 'layout/Header/Header'

/* */

import styles from 'App.module.scss'

/* */

class App extends React.Component {

    constructor(){

        super()

        this.state = {

            wrapperScrollTop : 0

        }

    }

    handleWrapperScroll(e){

        this.setState({

            wrapperScrollTop: e.target.scrollTop

        })

    }

    render(){

        return (

            <div className={ styles.App }>

                <Icons />
                <Menu />

                <div

                className={ styles.AppWrapper }

                onScroll={ e => this.handleWrapperScroll(e) }

                >

                    <Header />

                    <div className={ styles.AppView }>

                        <h1 className={ styles.AppTitle }>As mais tocadas no Brasil</h1>

                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptates ad natus ratione, non ullam odit vel vero laboriosam quam, eius tempora qui numquam maiores mollitia nobis deserunt reprehenderit delectus.</div>
                        <div>Corporis autem, ab. Blanditiis totam, quos dignissimos perferendis officiis illum, nulla sed tempore natus consequatur maiores, minima eos. A quo ut quod saepe. Tempora, vel doloribus aspernatur provident eaque, quibusdam?</div>
                        <div>Ipsum perspiciatis ad similique ratione inventore eligendi iste obcaecati aut. Reiciendis, impedit fuga illum iure sit adipisci? Nihil soluta delectus, nobis iste a rerum voluptate, fugiat molestias nostrum beatae similique.</div>
                        <div>Id, corporis, sit. Veritatis, odit, maiores culpa eum dicta ab animi! Aut fugiat quas doloribus aspernatur consequuntur tempore odit officiis eligendi quibusdam, commodi tenetur pariatur distinctio nam, maxime facilis dolorum!</div>
                        <div>Adipisci, asperiores alias. Suscipit ut praesentium cupiditate, velit dicta quod earum, sapiente nostrum, excepturi reprehenderit atque saepe error ullam cum fugiat consequatur odit deleniti fuga quidem porro, repellendus facilis magni!</div>
                        <div>Ipsa id vero nisi explicabo delectus non, unde quas iusto. A repellendus tempore et mollitia, quidem voluptas hic doloribus voluptatibus at quae iste tempora, animi maxime. Corporis, nulla, dolore. Quia.</div>
                        <div>Unde modi, tempore fuga, deleniti consequuntur facere quia nesciunt, fugiat dolore magnam repellendus minima iusto, expedita odio quod sapiente repudiandae ad voluptatibus officiis? Eaque quo, illum. Dignissimos nam aut obcaecati!</div>
                        <div>Voluptatibus impedit illo non dolorum ea, veritatis adipisci sapiente dignissimos distinctio quia sed quod ratione, culpa, accusantium itaque reiciendis excepturi provident enim rerum nemo natus minima, quam perferendis repudiandae. At.</div>
                        <div>Quos laudantium, magnam maiores, qui facere asperiores repudiandae sapiente ad delectus, nesciunt optio itaque ea totam, voluptate! Voluptas error omnis quia porro eos earum, quibusdam sed incidunt sunt laboriosam veritatis!</div>
                        <div>Dicta tempora minima perferendis magni nesciunt, hic nihil deleniti dolore laboriosam quidem a vero, vitae recusandae! Neque magni in fugiat, soluta laudantium nostrum exercitationem nobis sequi voluptate dolor aspernatur maiores.</div>
                        <div>Est ea, quis, recusandae vel eos consequuntur libero cumque eveniet architecto tenetur nulla corporis ullam impedit placeat ad consectetur assumenda accusamus praesentium, incidunt facere magni numquam a ab. Quibusdam, vitae.</div>
                        <div>Ut commodi labore, ipsa nulla voluptate doloribus consectetur minima aperiam asperiores fuga officia corporis est esse distinctio atque porro, libero maiores. Neque, iure libero reprehenderit deserunt nemo animi, omnis praesentium.</div>
                        <div>Fugiat iusto nisi fuga aliquam officiis tempore eos libero reprehenderit, fugit voluptatibus quaerat quidem sapiente inventore eligendi modi repudiandae corrupti nobis, accusantium nemo. Quae enim, unde ratione eligendi ab laudantium.</div>
                        <div>Modi tenetur ipsam enim exercitationem inventore praesentium odio voluptate, voluptas ipsa fuga aperiam, necessitatibus ab autem unde minima blanditiis, soluta ullam accusantium! Facere dolorem ipsa inventore, voluptate officiis ut accusamus.</div>
                        <div>Cum quisquam esse minus ipsam reprehenderit, ea, quis aperiam fugit expedita magni blanditiis, magnam possimus ducimus? Dolorum repellendus cumque veritatis quis autem error. Veniam odit numquam, aspernatur, aperiam inventore enim.</div>
                        <div>Inventore fuga maiores esse, velit eos enim architecto, repellat reprehenderit qui nam illum odit ipsa, delectus nostrum praesentium tempora quia recusandae! Dignissimos, voluptatum sint praesentium fugiat commodi tempore amet dolorum?</div>
                        <div>Natus fugiat, sunt magnam! Mollitia deserunt, nulla officiis temporibus, vitae sed laboriosam, corrupti aliquid nobis distinctio impedit quo. Officia expedita eligendi ipsum suscipit animi laboriosam eius labore harum, deleniti deserunt.</div>
                        <div>Aspernatur sit cumque magni omnis vel eaque eius harum perferendis ea a voluptas expedita, mollitia aliquam, in necessitatibus quisquam explicabo provident consequatur fugit qui labore. Libero accusamus sequi, cum rem!</div>
                        <div>Eum ab harum vero corporis ullam provident, dolor eveniet mollitia praesentium dolore molestiae facere temporibus alias id iure, aut neque aliquam, sequi adipisci tenetur quia corrupti, blanditiis. Architecto, sequi, veritatis?</div>
                        <div>Ratione laborum perferendis esse asperiores quaerat debitis reiciendis accusantium, ea, enim deserunt distinctio repellat voluptatibus mollitia autem natus illo eos fugit! Suscipit temporibus fuga omnis ullam, eum doloribus animi, nulla!</div>
                        <div>Laborum vero quo hic quaerat, adipisci inventore quasi! Quas provident minus quis numquam corporis perspiciatis pariatur non blanditiis cum ipsum quaerat distinctio voluptates, labore optio, expedita cupiditate, dolorum sed, quidem.</div>
                        <div>Nobis culpa, reiciendis voluptates praesentium, nulla excepturi quis non deserunt minus vero tempora hic earum illum quaerat! Tenetur voluptatibus numquam, ex exercitationem, error cupiditate. Laborum minima cumque rerum aliquam obcaecati.</div>
                        <div>Delectus incidunt eos animi consequatur facere qui est praesentium eveniet explicabo vel ullam assumenda quasi dolorem libero molestias possimus ab minima aliquam, architecto necessitatibus optio, temporibus amet repellat error impedit!</div>
                        <div>Necessitatibus sed sequi quo. Quaerat nobis cupiditate quas quae velit consequuntur neque inventore cum, ipsum cumque ipsa obcaecati. At blanditiis eveniet modi dolorem quisquam voluptate doloremque nihil quaerat quos nemo.</div>
                        <div>Nobis, architecto fugiat numquam voluptatem temporibus id praesentium qui amet hic illum. Doloribus alias temporibus architecto non earum eius qui optio veniam. Eaque rerum nulla dignissimos ut distinctio eum molestiae.</div>
                        <div>Eligendi accusantium, praesentium quam doloremque, velit officiis minima sint, odit porro accusamus delectus! Delectus suscipit illum consequuntur optio inventore sit, vero in molestiae ad, possimus unde dolore deleniti, reiciendis laudantium.</div>
                        <div>Commodi laborum aut excepturi, quo necessitatibus recusandae doloremque, ab cumque quae perspiciatis, saepe, labore atque sint fugiat possimus nostrum. Repellendus, doloribus ducimus, odit totam suscipit veniam eaque laudantium mollitia maiores?</div>
                        <div>Dicta facere incidunt veniam fuga autem, ab perferendis tempora facilis iste temporibus mollitia qui, sapiente! Eos porro odit fugiat, rem expedita ducimus quisquam quas. Quaerat, ad ipsum. Et, expedita, tempore.</div>
                        <div>Voluptatum possimus commodi ab enim culpa eveniet nobis velit, modi eaque aperiam architecto iste magnam necessitatibus odio exercitationem rem, laboriosam perferendis, ratione alias saepe. Quibusdam, architecto possimus placeat cupiditate inventore.</div>
                        <div>Similique placeat aliquam iusto suscipit ullam corporis, facilis error neque, odit deserunt dolore consectetur obcaecati ratione earum perferendis ipsam fugiat nisi? Provident dignissimos magnam quo, unde sunt sit ullam nisi.</div>
                        <div>Cum saepe, numquam laborum quidem ab aperiam, quo error commodi autem optio magni velit delectus, dolorem temporibus officiis nostrum officia, pariatur quasi inventore nihil eius distinctio ut. Quidem, excepturi, accusantium?</div>
                        <div>Illo, nemo tempora temporibus vitae facere enim blanditiis natus amet ex doloremque odit vel molestias. Atque, sint ad eligendi quis libero molestiae veniam qui, aliquid, blanditiis explicabo enim, consequatur cum.</div>
                        <div>Accusantium autem repellendus nulla dignissimos, molestiae dolores facere placeat a id mollitia! Sint voluptas dolores laudantium, dolor perferendis, perspiciatis aut amet qui doloribus ut et quas esse, at adipisci cupiditate.</div>
                        <div>Nesciunt dignissimos possimus repellat rem quasi rerum aliquid tenetur necessitatibus voluptatibus nihil et sed ex ad repudiandae libero excepturi, eveniet labore maxime eos, dolor eaque. Architecto deserunt eaque quam, repudiandae.</div>
                        <div>Quo qui voluptatibus, modi placeat, recusandae soluta a tempora natus, nobis nam, magnam! Architecto autem harum, numquam nobis reprehenderit ipsa! Quos dolores, ipsa veniam culpa, impedit quod perspiciatis vitae reiciendis!</div>
                        <div>Beatae corporis, doloremque numquam cum asperiores rerum ratione, enim voluptate nostrum debitis facilis. Culpa ratione adipisci aliquam aliquid expedita nostrum dolor dolore illo nulla quasi. Reiciendis corporis id aliquid doloribus.</div>
                        <div>Blanditiis vel, et ducimus quis, exercitationem, a odit deleniti aperiam animi, harum cupiditate. Atque molestiae optio temporibus labore nihil non vero, quasi ratione, recusandae consequuntur neque praesentium nulla nesciunt nobis.</div>
                        <div>Sint deleniti quod non, ex aliquid mollitia molestiae dolore cum, odio nisi, enim, rem quasi ut! Laboriosam tenetur nostrum ex, repellat quo nihil, fuga, in dolorum labore ut nam commodi?</div>
                        <div>Pariatur obcaecati mollitia architecto eum quidem quia veritatis explicabo, deleniti inventore fuga rerum neque alias in, enim nisi. Commodi perspiciatis maxime recusandae ex nihil nesciunt, eveniet veritatis. Sequi recusandae, atque.</div>
                        <div>Voluptatum ducimus excepturi quisquam illum molestiae exercitationem unde eligendi cum pariatur commodi, odio qui laudantium, aspernatur, esse magni nam alias quasi. Dolor, beatae commodi eaque unde recusandae vitae sunt maxime.</div>
                        <div>Atque minus sed, cupiditate assumenda, voluptas saepe modi. Recusandae fuga ullam assumenda natus maxime autem esse molestiae laudantium possimus, quod voluptatem eaque voluptates obcaecati aliquam ea unde beatae, hic tempora!</div>
                        <div>Dolorem repudiandae sed doloribus non eaque quasi tenetur modi molestias labore temporibus tempore atque porro, excepturi quia numquam quibusdam, totam nemo asperiores deserunt eligendi deleniti iusto ipsum a beatae? Facere!</div>
                        <div>A, voluptatibus, ipsum. Omnis fugit adipisci quidem esse rem necessitatibus labore corporis repudiandae ut officiis laboriosam, alias sit sequi neque iusto, quos nobis quasi vitae dicta. Placeat dolor laborum ipsum.</div>
                        <div>Natus ducimus nostrum, corporis voluptatum asperiores consequatur. Ullam tempore quae, ratione, pariatur, voluptatibus modi illo laborum dicta obcaecati vitae iusto veritatis aliquid ducimus vel culpa facilis necessitatibus sed! Molestiae, rem.</div>
                        <div>Totam id reiciendis possimus explicabo deserunt maxime culpa eligendi molestias, repellendus excepturi ea esse vel tenetur sit consectetur facilis dolorum quo autem cupiditate itaque cum earum accusantium officiis blanditiis. Sequi!</div>
                        <div>Tempore iusto ipsa laboriosam, quos ullam? Quis dolore laudantium, eligendi neque! Provident, fuga, nisi. Quidem nisi, voluptas quasi ab aspernatur consectetur officia assumenda similique consequatur. Dolore fugit suscipit delectus illo.</div>
                        <div>Similique, autem. Ipsa nihil, officia commodi corporis sint. Distinctio quis modi, libero accusamus quod. Obcaecati ad voluptates reprehenderit illo aperiam dolor cupiditate tempora suscipit, sed vitae velit ea, dicta fugiat.</div>
                        <div>Rem culpa dignissimos excepturi maiores dolores voluptatibus ratione quas velit fugit, eius eos beatae suscipit dolorem veniam autem, incidunt aliquid dolor hic dicta labore! Nulla velit cupiditate dignissimos id maiores.</div>
                        <div>Nihil eaque id, eligendi sequi dolor! Illum nobis dolores assumenda officiis voluptatum sunt deserunt, mollitia eaque accusantium iure minus non nihil, veniam quod ex, tempore magnam itaque! Tempora, et optio.</div>
                        <div>Deserunt quo, earum? Architecto officia facilis, ex odit ipsa libero repudiandae deserunt, soluta, animi perspiciatis eveniet. Sint iure quae cupiditate quasi beatae delectus fugiat excepturi quibusdam, eos provident enim repudiandae.</div>
                        <div>Fugiat totam, soluta velit ab temporibus exercitationem accusantium sit qui voluptatibus dolor dolorem quisquam doloribus est magni reiciendis suscipit? Corporis placeat iure assumenda, porro tempora voluptatem eum quisquam ut. Commodi.</div>
                        <div>Rem pariatur, error ad maiores totam esse. Similique enim cumque itaque officia illo ducimus commodi laudantium ad architecto quis inventore, neque, explicabo eos porro accusantium iste qui! Recusandae, asperiores, numquam?</div>
                        <div>Officia cupiditate tempore assumenda optio doloremque blanditiis molestiae dolorem. Voluptatibus deserunt totam omnis, voluptatum ipsum incidunt dicta? Rerum ipsa odio recusandae, a maxime assumenda voluptatibus labore facere ex. Iure, quasi.</div>
                        <div>Commodi maiores corporis doloribus distinctio quod omnis eligendi architecto, nemo ex, corrupti illo illum vitae fugiat animi! Earum, odio. Architecto, ea ipsam ducimus neque nisi sint, quibusdam officiis quos soluta!</div>
                        <div>Ratione, molestiae ut deleniti sint quidem cum eos hic commodi voluptas nostrum nisi temporibus illum aspernatur modi eveniet illo at neque, excepturi dolore sapiente labore cupiditate. Cum expedita, vel velit!</div>
                        <div>Consequatur id alias delectus recusandae minima sunt incidunt ea iste neque, quia dignissimos cum consequuntur eaque ullam vero aliquid sequi explicabo, velit. Veniam numquam ut et, harum consequuntur perspiciatis. Vero.</div>
                        <div>Repudiandae aut, labore, sint cumque nesciunt quam nisi totam, sunt delectus laborum facere reiciendis voluptatibus hic eveniet. Aut a, sit? Fuga dolores corrupti esse reprehenderit. Ratione nesciunt nulla, quam doloribus.</div>
                        <div>Voluptatibus ullam quas eius a, eos laudantium aliquid corrupti labore cupiditate, ipsam tenetur, sed obcaecati? Tempora, officia provident! Aspernatur optio est qui dolores maxime voluptates asperiores, dicta, non porro vel!</div>
                        <div>Sed sint numquam voluptas dolor fuga voluptatibus dolorum, dicta, neque quia a minima error modi velit incidunt eligendi, molestias sunt iusto pariatur, harum ipsa! Aspernatur earum distinctio asperiores aperiam architecto.</div>
                        <div>Non ullam facilis tenetur impedit hic quibusdam nesciunt dolorem eaque laudantium placeat ipsum sapiente illum voluptate velit sint perferendis quisquam repellat itaque, voluptatem totam deleniti nam dicta vel accusantium possimus.</div>

                    </div>

                </div>

            </div>

        )

    }

}

export default App
