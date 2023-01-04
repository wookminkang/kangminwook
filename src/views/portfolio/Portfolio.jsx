import style from "./Portfolio.module.scss";


export function Portfolio() {
    return (
        <div className={style.contentsWrap}>
            <h2>
                <img src="/images/my/my.png" alt="강민욱 이모지ㅋㅋㅋ" />
                Portfolio. 
            </h2>

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
        </div>
    );

}