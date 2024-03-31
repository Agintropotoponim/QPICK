import langIcon from '../../../assets/img/lang-icon.svg'
import { langList } from '../../../langList';
import classes from './LangList.module.css'

const LangList = ({ langList, selectedLang, setSelectedLang }) => {
    return (
        <div className={classes['list']}>
            <img src={langIcon} alt="" />
            <p className={classes['list__section']}>
                {
                    langList?.map((lang) => {
                        return (
                            <span
                                className={
                                    selectedLang === lang
                                        ? [classes['lang_selected'], classes['list_text']].join(" ")
                                        : classes['list_text']
                                }
                                onClick={() => setSelectedLang(lang)}
                            >
                                {lang}
                            </span>)
                    })
                }
            </p>
        </div>
    );
}

export default LangList;