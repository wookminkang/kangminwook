import style from './About.module.scss'

export function About() {
    return (
        <div className={style.contentsWrap}>
            <h2>
                <img src="/images/my/my.png" alt="강민욱 이모지ㅋㅋㅋ" />
                About. 
            </h2>

            <article>
                <p className={style.tit}>
                    <span>UI/UX DEVELOPER</span> 강민욱을 소개합니다. &nbsp;👋
                </p>
                <ul className={style.myfinoUl}>
                    <li>
                        <span>이름</span>
                        강민욱
                    </li>
                    <li>
                        <span>이메일</span>
                        kangmu950@gmail.com
                    </li>
                    <li>
                        <span>연락처</span>
                        010.7665.4418
                    </li>
                    <li>
                        <span>경력사항</span>
                        4년 6개월 <em className={style.or}>(기간 | 회사명 | 업무내용)</em>
                        <dl className={style.myfinoDl}>
                            <dt>
                                2020.09 ~ 2022.04 <em>|</em>                            
                            </dt>
                            <dd>
                                &nbsp;금솔커뮤니케이션 <em>|</em> <b>Publishing</b> <img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> +<img src="/images/icon/php.svg" alt="php" />
                            </dd>
                        </dl>

                        <dl className={style.myfinoDl}>
                            <dt>
                                2018.09 ~ 2021.09 <em>|</em>                            
                            </dt>
                            <dd>
                                &nbsp;그외(서민금융진흥원 메인UI) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(앳트래커 메인UI) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(mini gold 이벤트 페이지UI) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(JMW 이벤트 페이지UI) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(행복유치원 상세 페이지 기능 추가) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(소울브레인 메인UI) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(현대미학성형외과 메인, 상세UI) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(BizKT 상세페이지 기능 추가) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                                &nbsp;그외(메이린클리닉 상세페이지 UI) <em>|</em> <b>Publishing</b><img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> <br />
                            </dd>
                        </dl>

                        <dl className={style.myfinoDl}>
                            <dt>
                                2017.05 ~ 2020.09 <em>|</em>                            
                            </dt>
                            <dd>
                                &nbsp;솔루션뱅크 <em>|</em> <b>Publishing</b>  <img src="/images/icon/html.svg" alt="html" /> <img src="/images/icon/css.svg" alt="css" /> <img src="/images/icon/js.svg" alt="js" /> + <img src="/images/icon/php.svg" alt="php" />
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <span>주요 프로젝트</span>
                        최근 오픈한 순
                        <dl className={style.myfinoDl}>
                            <dt>
                                shereit(쉐어잇) <img src="/images/icon/react.svg" alt="react" />                          
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                금솔인 <img src="/images/icon/js.svg" alt="js" /> +<img src="/images/icon/php.svg" alt="php" />
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                인터렉티브 웹 포폴(개인) <img src="/images/icon/js.svg" alt="js" />
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                오늘의맛집(개인) <img src="/images/icon/react.svg" alt="react" />
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                노브랜드버거(개인) <img src="/images/icon/js.svg" alt="js" />
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                건강플랫폼(개인) <img src="/images/icon/js.svg" alt="js" />
                            </dt>
                        </dl>
                    </li>
                    <li>
                        <span>주요 기술</span>
                        실무에서 중점적으로 사용하는 기술
                        <dl className={style.myfinoDl}>
                            <dt>
                                Reactjs <img src="/images/icon/react.svg" alt="react" />                          
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                HTML5 <img src="/images/icon/html.svg" alt="html" /> 
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                CSS3 <img src="/images/icon/css.svg" alt="css" /> 
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt> 
                                JavaScript <img src="/images/icon/js.svg" alt="js" /> 
                            </dt>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dt>
                                jQuery
                            </dt>
                        </dl>
                    </li>
                </ul>
            </article>

            <article>
                <p className={style.tit}>
                    <span>실무 스킬</span>
                </p>
                <ul className={style.myfinoUl}>
                    <li>
                        <span>Default</span>
                        HTML5, CSS3, JavaScript, jQuery
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 기본적으로 퍼블리싱할 때 사용하는 언어 및 라이브러리
                            </dd>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 전통적인 웹앱 제작 방식에서 정적인 HTML로 협업 시 사용하는 기술!
                            </dd>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 퍼블리셔로 업무하며 정리했던 기술 문서 <a href="https://dune-cereal-1b2.notion.site/mw_log-ed404a5bdec143199049a312e4de0c9e" target="_blank">Notion.io</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <span>Special I</span>
                        Reactjs + Recoil + ReactQuery
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 페이스북, 트위터와 같은 동적인 웹에 최적화된 자바스크립트 라이브러리, 리액트!
                            </dd>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 중앙데이터 관리를 위한 Recoil!
                            </dd>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 비동기와 캐싱에 사용되는 ReactQuery!
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <span>협업</span>
                        GIT
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 형상관리 시스템을 활용한 개발자간의 협업
                            </dd>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 깃을 활용한 다양한 브랜치 전략
                            </dd>
                        </dl>
                    </li>
                </ul>
            </article>

            <article>
                <p className={style.tit}>
                    <span>개인 공부</span>
                </p>
                 <ul className={style.myfinoUl}>
                    <li>
                        <span>DB</span>
                        Firebase, MySQL@5, MongoDB
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 간단한 웹앱 제작을 위한 DB사용
                            </dd>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 백엔드 서버와 API에 대한 이해를 위해 개인적으로 공부
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <span>언어</span>
                        TypeScript, EcmaScript
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 타입체크를 활용한 JS 개발 패턴 공부
                            </dd>
                        </dl>
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 계속해서 발전하고 있는 JS에 대한 꾸준한 습득 및 실무
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <span>저장소</span>
                        Github
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 계속해서 공부하는 내용을 업데이트 하고 있으며 우측 버튼을 통해 public 저장소 확인 가능
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <span>npm</span>
                        Webpack
                        <dl className={style.myfinoDl}>
                            <dd>
                                - 웹 성능 최적화를 위한 자동화 도구(Webpack)
                            </dd>
                        </dl>
                    </li>
                </ul>
            </article>
            <article>
                
            </article>
        </div>
    );
}