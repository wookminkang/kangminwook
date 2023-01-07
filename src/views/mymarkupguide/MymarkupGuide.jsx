
import style from "./MymarkupGuide.module.scss"

export function MymarkupGuide() {
    


    return (
        <div className={style.contentsWrap}>        
           
            
    

            <h2>
                markup guide (CSS 라이브러리)
            </h2>
            <ul className={style.PageNavi}>
                <li className={ style.font18}>font</li>
                <li className={ style.font18}>button</li>
            </ul>
            <article>
                <p className={style.tit}>
                    <span>폰트 : Noto Sans KR</span>
                </p>
                <table className={style.tableSimple2}>
                    <caption>폰트 사이즈</caption>
                    <tbody>
                        <tr>
                            <th>Class Name</th>
                            <th>Font-size</th>
                            <th>Line-height</th>
                            <th>ex</th>
                        </tr>
                        <tr>
                            <td>title1</td>
                            <td>6.4rem</td>
                            <td>1.2</td>
                            <td>
                                <span className={style.title1}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>title2</td>
                            <td>5.6rem</td>
                            <td>1.2</td>
                            <td>
                                <span className={style.title2}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>title2</td>
                            <td>4.8rem</td>
                            <td>1.2</td>
                            <td>
                                <span className={style.title3}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>heading1</td>
                            <td>2.6rem</td>
                            <td>1.2</td>
                            <td>
                                <span className={style.heading1}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>heading2</td>
                            <td>2.3rem</td>
                            <td>1.2</td>
                            <td>
                                <span className={style.heading2}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>heading3</td>
                            <td>2rem</td>
                            <td>1.2</td>
                            <td>
                                <span className={style.heading3}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font18</td>
                            <td>1.8rem</td>
                            <td>1.5</td>
                            <td>
                                <span className={style.font18}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font16</td>
                            <td>1.6rem</td>
                            <td>1.5</td>
                            <td>
                                <span className={style.font16}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font14</td>
                            <td>1.4rem</td>
                            <td>1.5</td>
                            <td>
                                <span className={style.font14}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={style.tableSimple2}>
                    <caption>폰트 컬러</caption>
                    <tbody>
                        <tr>
                            <th>Class Name</th>
                            <th>Code</th>                    
                            <th>ex</th>
                        </tr>
                        <tr>
                            <td>font_red</td>
                            <td>#ff0000</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_red}`}>
                                    강OO
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_blue</td>
                            <td>#3366cc</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_blue}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_orange</td>
                            <td>#ff6600</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_orange}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_green</td>
                            <td>#169d00</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_green}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_gray1</td>
                            <td>#808080</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray1}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_gray2</td>
                            <td>#949494</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray2}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_gray3</td>
                            <td>#a9a9a9</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray3}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_gray4</td>
                            <td>#bdbebd</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray4}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_gray5</td>
                            <td>#d3d3d3</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray5}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_gray6</td>
                            <td>#e9e9e9</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray6}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={style.tableSimple2}>
                    <caption>폰트 두께</caption>
                    <tbody>
                        <tr>
                            <th>Class Name</th>
                            <th>Font-weight</th>                    
                            <th>ex</th>
                        </tr>
                        <tr>
                            <td>font_700</td>
                            <td>700</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray1} ${style.font_700}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_500</td>
                            <td>500</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray1} ${style.font_500}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_400</td>
                            <td>400</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray1} ${style.font_400}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>font_300</td>
                            <td>300</td>
                            <td>
                                <span className={`${style.heading3} ${style.font_gray1} ${style.font_300}`}>
                                    강민욱
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </div>
    );
}