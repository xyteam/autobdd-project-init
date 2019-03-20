### AutoBDD Project Initialization
Base project that serves as entry point to your specific projects that utilized [AutoBDD Automation Framework](https://github.com/xyteam/AutoBDD)

#### Usage
### Prerequisites
* Setup [XYPlatform](https://github.com/xyteam/xyPlatform) test environment
* Clone AutoBDD framework to your local test environment
    * `git clone https://github.com/xyteam/AutoBDD.git`

### Running your test project
To setup your project in AutoBDD Framework:
1. Set up your target project with **<your-project-name>** in github or gitlab
2. cd to your local AutoBDD
3. `git pull` the latest AutoBDD master
4. cd to **test-projects** inside AutoBDD
5. Execute `git clone git@github.com:xyteam/autobdd-project-init.git <your-project-name>`
6. cd to **<your-project-name>**
7. rm -rf .git
8. follow the git instruction in github/gitlab for **<your-project-name>** and check-in the base code
9. Sample structure of your project will look as below
```
+- AutoBDD
|   +-- ...
|   +-- test-projects
|       +-- <your-project-name>
|           +-- project
|           +-- test-init
|           +-- <your-test-module>
|           +-- ...
```

#### Special Mentions
  * Demo-App application and Precanned Cucumber-JS Steps are taken from **[webdriverio/cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate)**
  * Image Regognizing library is taken from **[RaiMan/SikuliX1](https://github.com/RaiMan/SikuliX1)**
  * Keyboard and Mouse control library is taken from **[octalmage/robotjs](https://github.com/octalmage/robotjs)**
  * Framework Control libraries are taken from **[TheBrainFamily/chimpy](https://github.com/TheBrainFamily/chimpy)** and its dependency node modules which include:
      * cucumber-js
      * v4.webdriverio
  * And many other open-source npm libraries