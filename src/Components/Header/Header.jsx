import React from 'react'
import s from './Header.module.scss'
import organizer from "../images/organizer.png";
import socialNetwork from "../images/socialNetwork.png";
import git from "../images/git.ico";
import mail from "../images/mail.ico";
import test from "../images/test.ico";


export const Header = () => {

	return (
		<>
			<div className={s.footerWrapper}>
				<footer className={s.footer}>
					<div>
						<a className={s.link}
							 target='_blank'
							 rel='noopener noreferrer'
							 href="https://sphinx7777.github.io/testFree">
							<img className={s.linkImg}
									 src={test}
									 alt="Test 1"/>
							<span className={s.linkTitle}>
									 Test_1
								 </span>
						</a>
					</div>
					<div className={s.LinkWrapper}>
						<div className={s.linkLineWrapper}>
							<a className={s.link}
								 target='_blank'
								 rel='noopener noreferrer'
								 href="https://sphinx7777.github.io/reactTypeScript">
								<img className={s.linkImg}
										 src={organizer}
										 alt="ToDo"/>
								<span className={s.linkTitle}>
										 ToDo
									 </span>
							</a>
							<a className={s.link}
								 target='_blank'
								 rel='noopener noreferrer'
								 href="https://sphinx7777.github.io/SocialNetvork">
								<img className={s.linkImg}
										 src={socialNetwork}
										 alt="Social network"/>
								<span className={s.linkTitle}>
										 Social_Network
									 </span>
							</a>
							<a className={s.link}
								 target='_blank'
								 rel='noopener noreferrer'
								 href="https://github.com/Sphinx7777?tab=repositories">
								<img className={s.linkImg}
										 src={git}
										 alt="Гитхаб"/>
								<span className={s.linkTitle}>
									 Git
								 </span>
							</a>
						</div>
					</div>
					<div>
						<a className={s.linkPost}
							 target='_blank'
							 rel='noopener noreferrer'
							 href="mailto:Spamoglot13@gmail.com">
							<img className={s.linkImg}
									 src={mail}
									 alt="Social network"/>
							<span className={s.linkTitle}>
									 Spamoglot13@gmail.com
								 </span>
						</a>
					</div>
				</footer>
			</div>
			<div style={{textAlign: 'left'}}><span>
				Сделал только одно вложение с подобным функционалом и начал новый проект со списками,
				&nbsp;<a target='_blank'
								 rel='noopener noreferrer'
								 href="https://sphinx7777.github.io/testFree_3">
							testFree_3
						</a>&nbsp; ,
				<b>DoubleClick</b> на имя отображает описание.<br/>
				<b>DoubleClick</b> на описании редактирование описания.<br/>
				Соседние элементы меняются местами.<br/>
				Добавляеся, редактируется и удаляется всего один Sublist у каждого родителя.<br/>
				Выше ссылка на второй тест, другие мои недавние проекты и репозиторий.
			</span></div>
		</>
	)
};

