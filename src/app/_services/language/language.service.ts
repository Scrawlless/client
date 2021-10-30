import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor() {
    // this.userLang = navigator.language.indexOf("ru") > -1 ? "ru" : "en";
    this.userLang = "ru";
  }

  userLang: any;

  library: any = {
    en: {
      ep: "Edit Profile",
      eps: "Edit Profile Settings",
      lg: "Log Out",
      em: "Email",
      ps: "Password",
      lgin: "Login",
      rgr: "Register",
      tolgin: "To Login",
      torgr: "To Registration",
      nm: "Name",
      enm: "Enter Your Name",
      eem: "Enter Your Email",
      eeps: "Enter Your Password",
      pr: "Profile",
      st: "Settings",
      up: "Upload Photos",
      cf: "Choose File(s)...",
      upp: "Upload",
      warnwrksp: "You can currently access our editor in the test mode. Work progress won't be saved automatically, but you can download a file with your work.",
      opnwrksp: "Open editor"
    },
    ru: {
      ep: "Изменить Профиль",
      eps: "Изменить Настройки",
      lg: "Выйти",
      em: "Email",
      ps: "Пароль",
      lgin: "Войти",
      rgr: "Зарегистрироваться",
      tolgin: "К Входу",
      torgr: "К Регистрации",
      nm: "Имя",
      enm: "Введите Ваше Имя",
      eem: "Введите Ваш Email",
      eeps: "Введите Ваш Пароль",
      pr: "Профиль",
      st: "Настройки",
      up: "Загрузить Фото",
      cf: "Выберите Файл(ы)...",
      upp: "Загрузить",
      warnwrksp: "На данный момент вы можете использовать программу в тестовом режиме. Работа не будет сохранена, но вы можете скачать файл со своей работы в редакторе.",
      opnwrksp: "Открыть редактор"
    }
  }

  t(req) {
    return this.library[this.userLang][req];
  }
}