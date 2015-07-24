* # sitesite for tecla5 group

online
[tecla> nvm use iojs
5](http://www.tecla5.com)

source
[github](https://github.com/tecla5/site)



# prerequisites

## configuration nvm version
important to use nvm version = 0.10.33 (for windows?, work for me in iojs v2.3.1)


## install nvm and use
github [nvm](https://github.com/creationix/nvm)

> nvm ls-remote


> nvm install iojs

* alternatively install other version
> nvm install v0.10.33

> nvm use iojs

> nvm ls

## intall bower
> npm install -g bower

## install grunt
> `npm install -g grunt`

> `npm install -g grunt-cli`


# install the app
> git clone https://github.com/tecla5/site.git

> npm install

> bower install


## generate distribution
> grunt (default: grunt build)

> grunt build


## running the app mode dev or dist
> grunt serve

> grunt serve:dist

http://localhost:9000/




## develop
we recomend use
- git-flow
- atom

### test

> grunt test:browser

> grunt test:remote



# collaborations
[jeagle](http://mu.jeagle.es/groupjs/)

[pugle](http://pugle.net/)

[ibearts](http://ibearts.com/)


## TODO:

- change to polymer v1.0
- add images
- add services page
