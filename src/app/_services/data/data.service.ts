import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title: BehaviorSubject<string>;
  user: BehaviorSubject<any>;
  tasks: BehaviorSubject<any>;
  friends: BehaviorSubject<any>;
  teachers: BehaviorSubject<any>;
  users: BehaviorSubject<any>;
  dialogs: BehaviorSubject<any>;
  conversations: BehaviorSubject<any>;
  mobile: BehaviorSubject<boolean>;
  homework_data: BehaviorSubject<any>;

  constructor() {
    this.title = new BehaviorSubject("Default Title");

    this.user = new BehaviorSubject({
      name: "Dzmitry Kuzmitch",
      email: "kuzya19989@gmail.com",
      id: 0
    });
    this.tasks = new BehaviorSubject([
      {
        name: "Equations",
        subject: "Math",
        date_created: new Date().toDateString(),
        id: 0
      }
    ]);
    this.friends = new BehaviorSubject([
      {
        name: "Tom",
        email: "tom@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 1
      },
      {
        name: "Matthew",
        email: "matthew@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 2
      },
      {
        name: "MD",
        email: "md@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 3
      },
    ]);
    this.teachers = new BehaviorSubject([
      {
        name: "Professor Steven",
        email: "steven@gmail.com",
        isStudent: false,
        isAdded: true,
        status: 1,
        id: 0
      }
    ]);
    this.users = new BehaviorSubject([
      {
        name: "Professor Steven",
        email: "steven@gmail.com",
        isStudent: false,
        isAdded: true,
        status: 1,
        id: 0
      },
      {
        name: "Tom",
        email: "tom@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 1
      },
      {
        name: "Matthew",
        email: "matthew@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 2
      },
      {
        name: "MD",
        email: "md@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 3
      },
      {
        name: "John",
        email: "john@gmail.com",
        isStudent: true,
        isAdded: false,
        status: 0,
        id: 4
      }
    ]);
    this.dialogs = new BehaviorSubject([
      {
        name: "Tom",
        friend_id: 1,
        id: 0,
        messages: [
          { content: "Hey, Dzmitry!", isSender: false },
          { content: "Hello, how are you?", isSender: true },
          { content: "I am doing fine, thank you!", isSender: false }
        ]
      },
      {
        name: "MD",
        friend_id: 3,
        id: 1,
        messages: [
          { content: "Hey man!", isSender: false },
          { content: "Hi", isSender: false },
          { content: "Are you there?", isSender: false },
          { content: "Hello???", isSender: false }
        ]
      }
    ]);
    this.mobile = new BehaviorSubject(undefined);
    this.homework_data = new BehaviorSubject({
      "info": {
        "homeworkType": "HW",
        "date": "2020-04-04T01:14:23.888Z",
        "subjectId": "1",
        "data": {
          "elements": {
            "lines": [
              0,
              1,
              2,
              3
            ],
            "fractions": [
              1,
              2
            ],
            "roots": [

            ],
            "powers": [
              1
            ],
            "brackets": [
              1
            ],
            "expressions": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
            ],
            "digits": [
              0,
              1,
              2,
              3,
              4,
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              0,
              1,
              2,
              3,
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ]
          },
          "lines": [
            {
              "id": 0,
              "y": 40,
              "x": 60,
              "dy": 40,
              "dx": 60,
              "fr": {

              },
              "br": {

              },
              "rt": {

              },
              "pw": {

              },
              "ex": {
                "0": {
                  "line": 0,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 1,
                  "zn": 0,
                  "osn": 0,
                  "ce": [
                    1
                  ],
                  "cd": [

                  ]
                },
                "1": {
                  "line": 0,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 0,
                  "zn": 0,
                  "osn": 1,
                  "ce": [

                  ],
                  "cd": [
                    0,
                    1,
                    2,
                    3,
                    4
                  ]
                }
              },
              "di": {
                "0": {
                  "id": 0,
                  "line": 0,
                  "pe": 1,
                  "s": 1.73,
                  "pos": 1,
                  "value": "45",
                  "text": "&#xe903;&#xe904;",
                  "type": "digit"
                },
                "1": {
                  "id": 1,
                  "line": 0,
                  "pe": 1,
                  "s": 1,
                  "pos": 2,
                  "value": "+",
                  "text": "&#xe90a;",
                  "type": "operator"
                },
                "2": {
                  "id": 2,
                  "line": 0,
                  "pe": 1,
                  "s": 2.46,
                  "pos": 3,
                  "value": "165",
                  "text": "&#xe900;&#xe905;&#xe904;",
                  "type": "digit"
                },
                "3": {
                  "id": 3,
                  "line": 0,
                  "pe": 1,
                  "s": 1,
                  "pos": 4,
                  "value": "=",
                  "text": "&#xe90e;",
                  "type": "operator"
                },
                "4": {
                  "id": 4,
                  "line": 0,
                  "pe": 1,
                  "s": 2.46,
                  "pos": 5,
                  "value": "210",
                  "text": "&#xe901;&#xe900;&#xe909;",
                  "type": "digit"
                }
              }
            },
            {
              "id": 1,
              "y": 80,
              "x": 60,
              "dy": 80,
              "dx": 60,
              "fr": {
                "1": {
                  "pe": 2,
                  "ch": 3,
                  "zn": 4,
                  "isActive": 1
                },
                "2": {
                  "pe": 2,
                  "ch": 5,
                  "zn": 6,
                  "isActive": 1
                }
              },
              "br": {

              },
              "rt": {

              },
              "pw": {

              },
              "ex": {
                "0": {
                  "line": 1,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 1,
                  "zn": 0,
                  "osn": 0,
                  "ce": [
                    2
                  ],
                  "cd": [

                  ]
                },
                "2": {
                  "line": 1,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 0,
                  "zn": 0,
                  "osn": 1,
                  "ce": [
                    3,
                    4,
                    5,
                    6
                  ],
                  "cd": [
                    0,
                    3,
                    4
                  ]
                },
                "3": {
                  "line": 1,
                  "pe": 2,
                  "pd": 0,
                  "fr": 1,
                  "ch": 1,
                  "zn": 0,
                  "osn": 0,
                  "ce": [

                  ],
                  "cd": [
                    1
                  ]
                },
                "4": {
                  "line": 1,
                  "pe": 2,
                  "pd": 0,
                  "fr": 1,
                  "ch": 0,
                  "zn": 1,
                  "osn": 0,
                  "ce": [

                  ],
                  "cd": [
                    2
                  ]
                },
                "5": {
                  "line": 1,
                  "pe": 2,
                  "pd": 4,
                  "fr": 2,
                  "ch": 1,
                  "zn": 0,
                  "osn": 0,
                  "ce": [

                  ],
                  "cd": [
                    5
                  ]
                },
                "6": {
                  "line": 1,
                  "pe": 2,
                  "pd": 4,
                  "fr": 2,
                  "ch": 0,
                  "zn": 1,
                  "osn": 0,
                  "ce": [

                  ],
                  "cd": [
                    6
                  ]
                }
              },
              "di": {
                "0": {
                  "id": 0,
                  "line": 1,
                  "pe": 2,
                  "s": 1,
                  "pos": 1,
                  "value": "",
                  "text": "",
                  "type": "fraction",
                  "fr": 1,
                  "zni": {
                    "height": 2,
                    "width": 1.73,
                    "fw": 0,
                    "top": 0,
                    "bottom": 0,
                    "html": "<rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"4\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1.73\" x=\"0\" class=\"expression\" y = \"0\" width=\"44.6\" height=\"20\"/><text x=\"5.1899999999999995\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">24</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"2\" x=\"5.1899999999999995\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe901;&#xe903;</text>"
                  },
                  "chi": {
                    "height": 2,
                    "width": 1.73,
                    "fw": 0,
                    "top": 0,
                    "bottom": 0,
                    "html": "<rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"3\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1.73\" x=\"0\" class=\"expression\" y = \"0\" width=\"44.6\" height=\"20\"/><text x=\"5.1899999999999995\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">12</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"1\" x=\"5.1899999999999995\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe900;&#xe901;</text>"
                  },
                  "chtml": "<g data-transformX=\"0\" data-transformY=\"0\" transform=\"translate(0,0)\"><rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"3\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1.73\" x=\"0\" class=\"expression\" y = \"0\" width=\"44.6\" height=\"20\"/><text x=\"5.1899999999999995\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">12</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"1\" x=\"5.1899999999999995\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe900;&#xe901;</text></g>",
                  "zhtml": "<g data-transformX=\"0\" data-transformY=\"20\" transform=\"translate(0,20)\"><rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"4\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1.73\" x=\"0\" class=\"expression\" y = \"0\" width=\"44.6\" height=\"20\"/><text x=\"5.1899999999999995\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">24</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"2\" x=\"5.1899999999999995\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe901;&#xe903;</text></g>"
                },
                "1": {
                  "id": 1,
                  "line": 1,
                  "pe": 3,
                  "s": 1.73,
                  "pos": 1,
                  "value": "12",
                  "text": "&#xe900;&#xe901;",
                  "type": "digit"
                },
                "2": {
                  "id": 2,
                  "line": 1,
                  "pe": 4,
                  "s": 1.73,
                  "pos": 1,
                  "value": "24",
                  "text": "&#xe901;&#xe903;",
                  "type": "digit"
                },
                "3": {
                  "id": 3,
                  "line": 1,
                  "pe": 2,
                  "s": 1,
                  "pos": 2,
                  "value": "=",
                  "text": "&#xe90e;",
                  "type": "operator"
                },
                "4": {
                  "id": 4,
                  "line": 1,
                  "pe": 2,
                  "s": 1,
                  "pos": 3,
                  "value": "",
                  "text": "",
                  "type": "fraction",
                  "fr": 2,
                  "zni": {
                    "height": 2,
                    "width": 1,
                    "fw": 0,
                    "top": 0,
                    "bottom": 0,
                    "html": "<rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"6\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1\" x=\"0\" class=\"expression\" y = \"0\" width=\"30\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">2</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"6\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe901;</text>"
                  },
                  "chi": {
                    "height": 2,
                    "width": 1,
                    "fw": 0,
                    "top": 0,
                    "bottom": 0,
                    "html": "<rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"5\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1\" x=\"0\" class=\"expression\" y = \"0\" width=\"30\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">1</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"5\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe900;</text>"
                  },
                  "chtml": "<g data-transformX=\"0\" data-transformY=\"0\" transform=\"translate(0,0)\"><rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"5\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1\" x=\"0\" class=\"expression\" y = \"0\" width=\"30\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">1</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"5\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe900;</text></g>",
                  "zhtml": "<g data-transformX=\"0\" data-transformY=\"20\" transform=\"translate(0,20)\"><rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"6\" data-lineid=\"1\" data-top=\"0\" data-cs=\"1\" x=\"0\" class=\"expression\" y = \"0\" width=\"30\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">2</text><text data-type=\"di\" data-lineid=\"1\" data-digitid=\"6\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe901;</text></g>"
                },
                "5": {
                  "id": 5,
                  "line": 1,
                  "pe": 5,
                  "s": 1,
                  "pos": 1,
                  "value": 1,
                  "text": "&#xe900;",
                  "type": "digit"
                },
                "6": {
                  "id": 6,
                  "line": 1,
                  "pe": 6,
                  "s": 1,
                  "pos": 1,
                  "value": 2,
                  "text": "&#xe901;",
                  "type": "digit"
                }
              }
            },
            {
              "id": 2,
              "y": 160,
              "x": 60,
              "dy": 160,
              "dx": 60,
              "fr": {

              },
              "br": {

              },
              "rt": {

              },
              "pw": {
                "1": {
                  "pe": 7,
                  "ch": 8,
                  "zn": 9,
                  "isActive": 1
                }
              },
              "ex": {
                "0": {
                  "line": 2,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 1,
                  "zn": 0,
                  "osn": 0,
                  "ce": [
                    7
                  ],
                  "cd": [

                  ]
                },
                "7": {
                  "line": 2,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 0,
                  "zn": 0,
                  "osn": 1,
                  "ce": [
                    8,
                    9
                  ],
                  "cd": [
                    1,
                    3
                  ]
                },
                "8": {
                  "line": 2,
                  "pe": 7,
                  "pd": 1,
                  "pw": 1,
                  "ch": 1,
                  "zn": 0,
                  "osn": 0,
                  "ce": [

                  ],
                  "cd": [
                    2
                  ]
                },
                "9": {
                  "line": 2,
                  "pe": 7,
                  "pd": 1,
                  "pw": 1,
                  "ch": 0,
                  "zn": 1,
                  "osn": 0,
                  "ce": [

                  ],
                  "cd": [
                    0
                  ]
                }
              },
              "di": {
                "0": {
                  "id": 0,
                  "line": 2,
                  "pe": 7,
                  "s": 1,
                  "pos": 1,
                  "value": 4,
                  "text": "&#xe903;",
                  "type": "digit"
                },
                "1": {
                  "id": 1,
                  "line": 2,
                  "pe": 7,
                  "s": 1,
                  "pos": 1,
                  "value": "",
                  "text": "",
                  "type": "power",
                  "pw": 1,
                  "zni": {
                    "height": 2,
                    "width": 1,
                    "fw": 0,
                    "top": 0,
                    "bottom": 0,
                    "html": "<rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"9\" data-lineid=\"2\" data-top=\"0\" data-cs=\"1\" x=\"0\" class=\"expression\" y = \"0\" width=\"30\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">4</text><text data-type=\"di\" data-lineid=\"2\" data-digitid=\"0\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe903;</text>"
                  },
                  "chi": {
                    "height": 1.375,
                    "width": 0.6875,
                    "fw": 0,
                    "top": 0,
                    "bottom": 0,
                    "html": "<rect fill=\"transparent\" stroke-width=\"1.03125\" data-fdc=\"0.6875\" data-wdc=\"0.6875\" data-hdc=\"0.6875\" data-type=\"ex\" data-expressionid=\"8\" data-lineid=\"2\" data-top=\"0\" data-cs=\"0.6875\" x=\"0\" class=\"expression\" y = \"0\" width=\"20.625\" height=\"13.75\"/><text x=\"2.0625\" class=\"textForSave\" y = \"11.6875\" font-family = \"Comic Sans MS\" font-size = \"13.75\">2</text><text data-type=\"di\" data-lineid=\"2\" data-digitid=\"2\" x=\"2.0625\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"11.6875\" font-family = \"scwlsWorkspace\" font-size = \"11\">&#xe901;</text>"
                  },
                  "chtml": "<g class=\"powerCH\" data-transformX=\"20\" data-transformY=\"-10\" transform=\"translate(20, -10)\"><path fill=\"transparent\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"2,2\" stroke=\"black\" d=\"M0 1.75 L0 13.75 L15 13.75\" /><rect fill=\"transparent\" stroke-width=\"1.03125\" data-fdc=\"0.6875\" data-wdc=\"0.6875\" data-hdc=\"0.6875\" data-type=\"ex\" data-expressionid=\"8\" data-lineid=\"2\" data-top=\"0\" data-cs=\"0.6875\" x=\"0\" class=\"expression\" y = \"0\" width=\"20.625\" height=\"13.75\"/><text x=\"2.0625\" class=\"textForSave\" y = \"11.6875\" font-family = \"Comic Sans MS\" font-size = \"13.75\">2</text><text data-type=\"di\" data-lineid=\"2\" data-digitid=\"2\" x=\"2.0625\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"11.6875\" font-family = \"scwlsWorkspace\" font-size = \"11\">&#xe901;</text></g>",
                  "zhtml": "<g data-transformX=\"0\" data-transformY=\"3.75\" transform=\"translate(0,3.75)\"><rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"9\" data-lineid=\"2\" data-top=\"0\" data-cs=\"1\" x=\"0\" class=\"expression\" y = \"0\" width=\"30\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">4</text><text data-type=\"di\" data-lineid=\"2\" data-digitid=\"0\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe903;</text></g>"
                },
                "2": {
                  "id": 2,
                  "line": 2,
                  "pe": 8,
                  "s": 1,
                  "pos": 1,
                  "value": 2,
                  "text": "&#xe901;",
                  "type": "digit"
                },
                "3": {
                  "id": 3,
                  "line": 2,
                  "pe": 7,
                  "s": 1,
                  "pos": 2,
                  "value": "=",
                  "text": "&#xe90e;",
                  "type": "operator"
                }
              }
            },
            {
              "id": 3,
              "y": 220,
              "x": 60,
              "dy": 220,
              "dx": 60,
              "fr": {

              },
              "br": {
                "1": {
                  "pe": 10,
                  "pd": 0,
                  "cn": 11,
                  "isActive": 1
                }
              },
              "rt": {

              },
              "pw": {

              },
              "ex": {
                "0": {
                  "line": 3,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 1,
                  "zn": 0,
                  "osn": 0,
                  "ce": [
                    10
                  ],
                  "cd": [

                  ]
                },
                "10": {
                  "line": 3,
                  "pe": 0,
                  "pd": 0,
                  "fr": 0,
                  "ch": 0,
                  "zn": 0,
                  "osn": 1,
                  "ce": [
                    11
                  ],
                  "cd": [
                    0,
                    4,
                    5,
                    6
                  ]
                },
                "11": {
                  "line": 3,
                  "pe": 10,
                  "pd": 0,
                  "br": 1,
                  "ch": 0,
                  "zn": 0,
                  "osn": 0,
                  "cn": 1,
                  "ce": [

                  ],
                  "cd": [
                    1,
                    2,
                    3
                  ]
                }
              },
              "di": {
                "0": {
                  "id": 0,
                  "line": 3,
                  "pe": 10,
                  "s": 1,
                  "pos": 1,
                  "value": "",
                  "text": "",
                  "type": "brackets",
                  "br": 1,
                  "cni": {
                    "height": 2,
                    "width": 3.5,
                    "fw": 0,
                    "top": 0,
                    "bottom": 0,
                    "html": "<rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"11\" data-lineid=\"3\" data-top=\"0\" data-cs=\"3\" x=\"0\" class=\"expression\" y = \"0\" width=\"70\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">5</text><text data-type=\"di\" data-lineid=\"3\" data-digitid=\"1\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe904;</text><text x=\"22\" class=\"textForSave\" y = \"17.5\" font-family = \"Comic Sans MS\" font-size = \"20\">-</text><text data-type=\"op\" x=\"22\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17.5\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe90b;</text><text x=\"43\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">3</text><text data-type=\"di\" data-lineid=\"3\" data-digitid=\"3\" x=\"43\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe902;</text>"
                  },
                  "cnhtml": "<g data-transformX=\"0\" data-transformY=\"10\" transform=\"translate(0,10)\"><path d=\"M2.5 0 C -2.5 5, -2.5 15, 2.5 20\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" fill=\"transparent\"/><rect fill=\"transparent\" stroke-width=\"1.5\" data-fdc=\"1\" data-wdc=\"1\" data-hdc=\"1\" data-type=\"ex\" data-expressionid=\"11\" data-lineid=\"3\" data-top=\"0\" data-cs=\"3\" x=\"0\" class=\"expression\" y = \"0\" width=\"70\" height=\"20\"/><text x=\"3\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">5</text><text data-type=\"di\" data-lineid=\"3\" data-digitid=\"1\" x=\"3\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe904;</text><text x=\"22\" class=\"textForSave\" y = \"17.5\" font-family = \"Comic Sans MS\" font-size = \"20\">-</text><text data-type=\"op\" x=\"22\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17.5\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe90b;</text><text x=\"43\" class=\"textForSave\" y = \"17\" font-family = \"Comic Sans MS\" font-size = \"20\">3</text><text data-type=\"di\" data-lineid=\"3\" data-digitid=\"3\" x=\"43\" style=\"visibility: hidden;\" class=\"element regularText\" y = \"17\" font-family = \"scwlsWorkspace\" font-size = \"16\">&#xe902;</text><path d=\"M67.5 0 C 72.5 5, 72.5 15, 67.5 20\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" fill=\"transparent\"/></g>"
                },
                "1": {
                  "id": 1,
                  "line": 3,
                  "pe": 11,
                  "s": 1,
                  "pos": 1,
                  "value": 5,
                  "text": "&#xe904;",
                  "type": "digit"
                },
                "2": {
                  "id": 2,
                  "line": 3,
                  "pe": 11,
                  "s": 1,
                  "pos": 2,
                  "value": "-",
                  "text": "&#xe90b;",
                  "type": "operator"
                },
                "3": {
                  "id": 3,
                  "line": 3,
                  "pe": 11,
                  "s": 1,
                  "pos": 3,
                  "value": 3,
                  "text": "&#xe902;",
                  "type": "digit"
                },
                "4": {
                  "id": 4,
                  "line": 3,
                  "pe": 10,
                  "s": 1,
                  "pos": 2,
                  "value": "×",
                  "text": "&#xe90c;",
                  "type": "operator"
                },
                "5": {
                  "id": 5,
                  "line": 3,
                  "pe": 10,
                  "s": 1,
                  "pos": 3,
                  "value": 4,
                  "text": "&#xe903;",
                  "type": "digit"
                },
                "6": {
                  "id": 6,
                  "line": 3,
                  "pe": 10,
                  "s": 1,
                  "pos": 4,
                  "value": "=",
                  "text": "&#xe90e;",
                  "type": "operator"
                }
              }
            }
          ],
          "description": "Sample Homework",
          "scale": 1,
          "geo": {
            "dots": [

            ],
            "lines": [

            ],
            "circles": [

            ]
          },
          "geoElements": {
            "dots": [

            ],
            "lines": [

            ],
            "circles": [

            ]
          }
        },
        "dataFromTeacher": {

        },
        "columnsInfo": {

        }
      }
    });
  }

  changeTitle(message: string) {
    this.title.next(message)
  }
  updateUser(user: any) {
    this.user.next(user);
  }
  updateTasks(tasks: any) {
    this.tasks.next(tasks);
  }
  updateFriends(friends: any) {
    this.friends.next(friends);
  }
  updateTeachers(teachers: any) {
    this.teachers.next(teachers);
  }
  updateDialogs(dialogs: any) {
    this.dialogs.next(dialogs);
  }
  updateMobile(mobile: boolean) {
    this.mobile.next(mobile);
  }
  updateHomework(homework_data: boolean) {
    this.homework_data.next(homework_data);
  }
}