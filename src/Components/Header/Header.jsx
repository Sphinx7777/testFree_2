import React from 'react'
import s from './Header.module.scss'
import organizer from "../images/organizer.png";
import socialnetwork from "../images/socialnetwork.png";
import git from "../images/git.ico";
import mail from "../images/mail.ico";
import test from "../images/test.ico";


export const Header = () => {

	return (
		<>
		<div className={s.footerWrapper}>
			<footer className={s.footer}>
				<div>
					<a className={s.link}  target='_blank' rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/testFree">
						<img className={s.linkImg} src={test} alt="Test 1"/><span className={s.linkTitle}>Test_1</span>
					</a>
				</div>
				<div className={s.LinkWrapper}>
					<div className={s.linkLineWrapper}>
						<a className={s.link}  target='_blank' rel='noopener noreferrer'
							 href="https://sphinx7777.github.io/reactTypeScript">
							<img className={s.linkImg} src={organizer} alt="ToDo"/><span className={s.linkTitle}>ToDo</span>
						</a>
						<a className={s.link} target='_blank' rel='noopener noreferrer'
										 href="https://sphinx7777.github.io/SocialNetvork">
							<img className={s.linkImg} src={socialnetwork} alt="Social network"/><span className={s.linkTitle}>Social_Network</span>
						</a>
						<a className={s.link} target='_blank' rel='noopener noreferrer'
									 href="https://github.com/Sphinx7777?tab=repositories">
						<img className={s.linkImg} src={git} alt="Гитхаб"/><span className={s.linkTitle}>Git</span>
					</a>
					</div>
				</div>
				<div>
					<a className={s.linkPost} target='_blank' rel='noopener noreferrer'
									 href="mailto:Spamoglot13@gmail.com">
						<img className={s.linkImg} src={mail} alt="Social network"/><span className={s.linkTitle}>Spamoglot13@gmail.com</span>
					</a>
				</div>
			</footer>
		</div>
			<div style={{textAlign:'left'}}><span >Добрый день. К сожалению потратил всю субботу прежде чем понял что пошел не по тому пути.<br/>
				В воскресенье занимался вторым тестовым и переделывать все с нуля времени не осталось.<br/>
				Сразу не понял что надо бесконечную вложенность только по двум линиям
				и возможность при наведении отображать, редактировать и удалять каждый контакт индивидуально тоже всего по этим линиям ((.
				Сделал только одно вложение с подобным функционалом и начал новый проект со списками,
				но ввиду того что раньше подобного не делал, рабочая неделя до следующих выходных доделать не даст.
				Дополнительно оформлять смысла не увидел т.к. проект не удался как было необходимо.<br/>
				DoubleClick на имя отображает описание.<br/>
				DoubleClick на описании редактирование описания.<br/>
				Соседние элементы меняются местами.<br/>
				Добавляеся, редактируется и удаляется всего один Sublist у каждого родителя.<br/>
				Сохраняется в local storage. Если продолжать в подобном варианте код слишком разрастается
				и я понимаю что должно быть иначе.))<br/>
				Выше ссылка на второй тест, другие мои недавние проекты и репозиторий.
			</span></div>
			</>
	)
};

