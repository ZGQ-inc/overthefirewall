---
layout: default
---

<span id="top"></span>
![socialify](https://socialify.git.ci/ZGQ-inc/overthefirewall/image?description=1&descriptionEditable=%E8%A6%86%E7%9B%96%E5%85%A8%E5%B9%B3%E5%8F%B0%0A%E5%AE%8C%E5%85%A8%E5%85%8D%E8%B4%B9%0A%E8%8A%82%E7%82%B9%E8%AE%A2%E9%98%85%0A%E6%9C%BA%E5%9C%BA%E6%8E%A8%E8%8D%90%0A%E7%A0%B4%E8%A7%A3VPN%E8%BD%AF%E4%BB%B6%E5%88%86%E4%BA%AB&font=Inter&forks=1&logo=https%3A%2F%2Fzgq-inc.github.io%2Foverthefirewall%2Fimage%2Fvpnclient_black.png&name=1&owner=1&pattern=Brick%20Wall&stargazers=1&theme=Light)

![overthefirewall](https://count.getloli.com/get/@overthefirewall?theme=rule34)

[![overthefirewall](https://s05.flagcounter.com/countxl/dchy/bg_FFFFFF/txt_000000/border_000000/columns_4/maxflags_12/viewers_3/labels_1/pageviews_0/flags_0/percent_0/)](https://info.flagcounter.com/dchy)

***

项目作者の[**个人主页**](https://domain.zgqinc.gq)

欢迎进群**讨论/提问** [我的资源群](https://zgq-inc.github.io/transit-groups/)

提问前提是在<span style="color: #ff0000">看清这篇文档之后</span>如有问题可以反馈，拒绝粗略看过一遍之后就开始提问。

如果遇到问题可以查阅[常见问题](#Q&A)栏目。

**温馨提示**：本文档中所有`蓝体字/下划线`可点击

| 图标 | 含义 | 图标 | 含义 |
| ![oss](assets/min-oss.svg) | 开源软件 | ![tuijian](assets/min-tuijian.svg) | 推荐使用 |

***

<span id="ads"></span>
# 赞助商广告

[<font size="5">天枢互联</font>](sponsor/sponsor.html) ![tuijian](assets/min-tuijian.svg)

全球网络中继服务,随时随处尽情使用

[<font size="5">Sausage Cloud</font>](sponsor/sponsor_3.html) ![tuijian](assets/min-tuijian.svg)

高性价比网络中继服务，随时随处尽情使用

[<font size="5">Nanocloud</font>](sponsor/sponsor_7.html) ![tuijian](assets/min-tuijian.svg)

亏本运营，节点质量同价位找不到第二家

[<font size="5">奥创</font>](sponsor/sponsor_14.html) ![tuijian](assets/min-tuijian.svg)

全球网络中继服务，随时随处尽情使用

[<font size="5">雲村YUNCUN</font>](sponsor/sponsor_2.html)

勇敢发现新世界的美

[<font size="5">EdNovas云</font>](sponsor/sponsor_5.html)

EdNovas is the best!

[<font size="5">V2云</font>](sponsor/sponsor_6.html)

开始探索新的世界

[<font size="5">遨游机场</font>](sponsor/sponsor_4.html)

谷歌ceo比尔盖茨亲临一线指导部署

[<font size="5">VMSSR</font>](sponsor/sponsor_8.html)

全球中继网络

[<font size="5">EteralNetwork</font>](sponsor/sponsor_9.html)

你的网络安全之选

[<font size="5">米白云</font>](sponsor/sponsor_10.html)

致力于提供稳定高速的互联网服务

[<font size="5">万达云</font>](sponsor/sponsor_11.html)

多地区自有硬件服务器

[<font size="5">轻舞云</font>](sponsor/sponsor_12.html)

大陆首选 亚洲区最佳 VPN

[<font size="5">青云梯</font>](sponsor/sponsor_13.html)

完美运营三周年，让您畅游全球网络

***

<span id="contents"></span>

> # 目录

 [梯子客户端使用教程](#tutorials)![Gitbook](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Gitbook&logoColor=000000)
 
 [梯子客户端](#VPN)

[![Android](https://img.shields.io/badge/-Android-3DDC84?style=for-the-badge&logo=Android&logoColor=FFFFFF)](#Android)![Samsung](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Samsung&logoColor=024DA1)![Xiaomi](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Xiaomi&logoColor=FF6900)![Huawei](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Huawei&logoColor=D1092E)`etc.`

  - [Clash Meta](#CMFA) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [SagerNet](#SagerNet) ![oss](assets/min-oss.svg)
  - [Surfboard](#Surfboard) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [FlClash](#FlClash) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [NekoBox](#NekoBox) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [v2rayNG](#v2rayNG) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[![Windows](https://img.shields.io/badge/-Windows-0078D6?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=FFFFFF)](#Windows)

  - [Clash Verge rev](#Clash_Verge_rev) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [Clash Nyanpasu](#Clash_Nyanpasu) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [FlClash](#FlClash_Windows) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [NekoRay](#NekoRay) ![oss](assets/min-oss.svg)
  - [v2rayN](#v2rayN) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[![iOS](https://img.shields.io/badge/-iOS/iPadOS-000000?style=for-the-badge&logo=Apple&logoColor=FFFFFF)](#iOS/iPadOS)

  - [Shadowrocket](#Shadowrocket) ![tuijian](assets/min-tuijian.svg)
  - [OneClick](#OneClick) ![tuijian](assets/min-tuijian.svg)
  - [Quantumult X](#Quantumult_X)
  - [Surge 5](#Surge_5)
  - [Potatso](#Potatso)

[![MacOS](https://img.shields.io/badge/-MacOS-999999?style=for-the-badge&logo=MacOS&logoColor=FFFFFF)](#MacOS)

  - [Clash Verge rev](#Clash_Verge_rev_MacOS) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [Clash Nyanpasu](#Clash_Nyanpasu_MacOS) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [FlClash](#FlClash_MacOS) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [v2rayU](#v2rayU) ![oss](assets/min-oss.svg)

[![Linux](https://img.shields.io/badge/-Linux-FCC624?style=for-the-badge&logo=Linux&logoColor=222222)](#Linux)

  - [Clash Verge rev](#Clash_Verge_rev_Linux) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [Clash Nyanpasu](#Clash_Nyanpasu_Linux) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [FlClash](#FlClash_Linux) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)
  - [v2rayN](#v2rayN_Linux) ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

  + [未整理&其它](#others)

[路由规则](#rule)

[订阅平台](#sub)
+ [节点池-SOCKS5](#proxypool)
+ [Shadowsocks 免费上网账号](#freess)
+ [上百个节点池合集](#ProxypoolCollection)
+ [上百个免费机场合集](#AirfieldCollection)

[订阅转换](#subconvert)

[网速测试](#speedtest)

[IP查询](#IP)

[安卓破解版VPN分享](#Android_patched_VPN)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84) ![tuijian](assets/min-tuijian.svg)
+ [vpnify](#vpnify)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)![tuijian](assets/min-tuijian.svg)
+ [1.1.1.1](#1.1.1.1)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)![tuijian](assets/min-tuijian.svg)
+ [AdGuard VPN](#AdGuard_VPN)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)
+ [SamsungMax 三星旗下隐私保护软件](#SamsungMax)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)![Samsung](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Samsung&logoColor=024DA1) ![tuijian](assets/min-tuijian.svg) `破解版`

[Shadowrocket 小火箭账号分享](#Shadowrocket_Apple_ID)![iOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Apple&logoColor=000000) ![tuijian](assets/min-tuijian.svg)
+ [Get Shadowrocket](#GetShadowrocket)
+ [苹果帝-Appledi.com](#Appledi)

[注册外区 Apple ID 帐号教程](#Apple_ID)![iOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Apple&logoColor=000000)

[热点共享手机VPN给其它设备](#hotspot)
+ [EveryProxy](#EveryProxy)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)
+ [VPN 热点](#VPNhotspot)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)

[WattToolkit 加速Steam社区访问](#WattToolkit)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)![Windows](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=0078D6)![MacOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=MacOS&logoColor=999999)![Linux](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Linux&logoColor=000000) ![oss](assets/min-oss.svg)

[Blockanet 全球IP共享](#BlockaNet)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84) `破解版`

[解决DNS污染问题](#DNS)

[外网&Github文件下载加速](#speedup_download)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)![Windows](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=0078D6)![iOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Apple&logoColor=000000)![MacOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=MacOS&logoColor=999999)![Linux](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Linux&logoColor=000000)

[Hyperbeam屏幕共享聊天室](#Hyperbeam)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)![Windows](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=0078D6)![iOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Apple&logoColor=000000)![MacOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=MacOS&logoColor=999999)![Linux](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Linux&logoColor=000000)

[<font color="#FF0000">翻墙软件&机场黑名单</font>](#blacklist)

[Android软件](#Android_software)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84) ![tuijian](assets/min-tuijian.svg)

[![Telegram](https://img.shields.io/badge/-Telegram-31A6E0?style=for-the-badge&logo=Telegram&logoColor=FFFFFF)](#Telegram) `直连版` `主题`

[![Google](https://img.shields.io/badge/-Google-000000?style=for-the-badge&logo=Google&logoColor=FFFFFF)](#Google) `安装器` `第三方`

[![YouTube](https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=YouTube&logoColor=FFFFFF)](#YouTube) `下载器` `第三方`

[![Twitter](https://img.shields.io/badge/-Twitter-1D9BF0?style=for-the-badge&logo=Twitter&logoColor=FFFFFF)](#Twitter) `直连版` `第三方`

[![Facebook](https://img.shields.io/badge/-Facebook-0470E5?style=for-the-badge&logo=Facebook&logoColor=FFFFFF)](#Facebook) `第三方`

[![Netflix](https://img.shields.io/badge/-Netflix-221F1F?style=for-the-badge&logo=Netflix&logoColor=E21221)](#Netflix) `第三方`

[![Spotify](https://img.shields.io/badge/-Spotify-1DB954?style=for-the-badge&logo=Spotify&logoColor=000000)](#Spotify) `下载器` `破解版`

[![Pixiv](https://img.shields.io/badge/-Pixiv-0096FA?style=for-the-badge&logo=Pixiv&logoColor=FFFFFF)](#Pixiv) `破解版` `第三方`

[![WhatsApp](https://img.shields.io/badge/-WhatsApp-35DB53?style=for-the-badge&logo=WhatsApp&logoColor=FFFFFF)](#WhatsApp) `第三方`

[![Reddit](https://img.shields.io/badge/-Reddit-FF4500?style=for-the-badge&logo=Reddit&logoColor=FFFFFF)](#Reddit) `第三方`

[![Instagram](https://img.shields.io/badge/-Instagram-D63173?style=for-the-badge&logo=Instagram&logoColor=FFFFFF)](#Instagram) `修改版` `第三方`

[![VKontakte](https://img.shields.io/badge/-VKontakte-0079FF?style=for-the-badge&logo=VK&logoColor=FFFFFF)](#VKontakte) `修改版` `第三方`

[![TikTok](https://img.shields.io/badge/-TikTok-000000?style=for-the-badge&logo=TikTok&logoColor=FFFFFF)](#TikTok) `修改版` `插件`

[![Twitch](https://img.shields.io/badge/-Twitch-9146FF?style=for-the-badge&logo=Twitch&logoColor=FFFFFF)](#Twitch) `第三方`

[![LINE](https://img.shields.io/badge/-LINE-21BA52?style=for-the-badge&logo=LINE&logoColor=FFFFFF)](#LINE) `LINE相机`

[![Discord](https://img.shields.io/badge/-Discord-4F5BDA?style=for-the-badge&logo=Discord&logoColor=FFFFFF)](#Discord) `修改版`

[![Mastodon](https://img.shields.io/badge/-Mastodon-5347CF?style=for-the-badge&logo=Mastodon&logoColor=FFFFFF)](#Mastodon) `第三方`

[多功能](#multifunction) `社交媒体多合一`

[2000个安卓破解软件](#upload) `项目作者的分享`

[赞助内容](#sponsor)

[常见问题](#Q&A)

[鸣谢](#thanks)

[声明](#announce)

[捐赠](#donate)

***
***

<span id="tutorials"></span>
# 梯子客户端使用教程

[<font size="5">Gitbook</font>](https://zgq-inc.gitbook.io/overthefirewall/)![Gitbook](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Gitbook&logoColor=000000)

***

<span id="VPN"></span>
# 梯子客户端

[<font size="5">返回目录</font>](#contents)

<span id="Android"></span>
## Android![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)

<span id="CMFA"></span>
+ <font size="5">Clash Meta</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)

[项目地址 MetaCubeX/ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="SagerNet"></span>
+ <font size="5">SagerNet</font> ![oss](assets/min-oss.svg)

[官网 sagernet.org](https://sagernet.org/)

[![GooglePlay](assets/googleplay.svg)](https://play.google.com/store/apps/details?id=io.nekohasekai.sagernet)

[官方下载地址](https://sagernet.org/download/)

[从release页面下载](https://github.com/SagerNet/SagerNet/releases)

[项目地址 SagerNet/SagerNet](https://github.com/SagerNet/SagerNet)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="Surfboard"></span>
+ <font size="5">Surfboard</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[官网 getsurfboard.com](https://getsurfboard.com/)

[![GooglePlay](assets/googleplay.svg)](https://play.google.com/store/apps/details?id=com.getsurfboard)

TG频道 [@surfboardnews](https://t.me/surfboardnews)![Telegram](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Telegram&logoColor=31A6E0)

<span id="FlClash"></span>
+ <font size="5">FlClash</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/chen08209/FlClash/releases)

[项目地址 chen08209/FlClash](https://github.com/chen08209/FlClash)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="NekoBox"></span>
+ <font size="5">NekoBox</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)

[项目地址 MatsuriDayo/NekoBoxForAndroid](https://github.com/MatsuriDayo/NekoBoxForAndroid)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="v2rayNG"></span>
+ <font size="5">v2rayNG</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[![GooglePlay](assets/googleplay.svg)](https://play.google.com/store/apps/details?id=com.v2ray.ang)

[从release页面下载](https://github.com/2dust/v2rayNG/releases)

[项目地址 2dust/v2rayNG](https://github.com/2dust/v2rayNG)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="Windows"></span>
## Windows![Windows](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=0078D6)

<span id="Clash_Verge_rev"></span>
+ <font size="5">Clash Verge rev</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/wonfen/clash-verge-rev/releases)

[项目地址 wonfen/clash-verge-rev](https://github.com/wonfen/clash-verge-rev)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="Clash_Nyanpasu"></span>
+ <font size="5">Clash Nyanpasu</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/keiko233/clash-nyanpasu/releases)

[项目地址 keiko233/clash-nyanpasu](https://github.com/keiko233/clash-nyanpasu)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="FlClash_Windows"></span>
+ <font size="5">FlClash</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/chen08209/FlClash/releases)

[项目地址 chen08209/FlClash](https://github.com/chen08209/FlClash)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="NekoRay"></span>
+ <font size="5">NekoRay</font> ![oss](assets/min-oss.svg)

[从release页面下载](https://github.com/MatsuriDayo/nekoray/releases)

[项目地址 MatsuriDayo/nekoray](https://github.com/MatsuriDayo/nekoray)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="v2rayN"></span>
+ <font size="5">v2rayN</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/2dust/v2rayN/releases)

[项目地址 2dust/v2rayN](https://github.com/2dust/v2rayN)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="iOS/iPadOS"></span>
## iOS/iPadOS![iOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Apple&logoColor=000000)

<span id="Shadowrocket"></span>
+ <font size="5">Shadowrocket</font> ![tuijian](assets/min-tuijian.svg)

[![AppStore](assets/appstore.svg)](https://apps.apple.com/us/app/shadowrocket/id932747118)

<span id="OneClick"></span>
+ <font size="5">OneClick</font> ![tuijian](assets/min-tuijian.svg)

[官网 oneclick.earth](https://oneclick.earth/#/)

[![AppStore](assets/appstore.svg)](https://apps.apple.com/us/app/id1545555197)

<span id="Quantumult_X"></span>
+ <font size="5">Quantumult X</font>

[![AppStore](assets/appstore.svg)](https://apps.apple.com/us/app/quantumult-x/id1443988620)

<span id="Surge_5"></span>
+ <font size="5">Surge 5</font>

[![AppStore](assets/appstore.svg)](https://apps.apple.com/hk/app/surge-5/id1442620678)

<span id="Potatso"></span>
+ <font size="5">Potatso</font>

[![AppStore](assets/appstore.svg)](https://apps.apple.com/us/app/potatso/id1239860606)

<span id="MacOS"></span>
## MacOS![MacOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=MacOS&logoColor=999999)

<span id="Clash_Verge_rev_MacOS"></span>
+ <font size="5">Clash Verge rev</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/wonfen/clash-verge-rev/releases)

[项目地址 wonfen/clash-verge-rev](https://github.com/wonfen/clash-verge-rev)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="Clash_Nyanpasu_MacOS"></span>
+ <font size="5">Clash Nyanpasu</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/keiko233/clash-nyanpasu/releases)

[项目地址 keiko233/clash-nyanpasu](https://github.com/keiko233/clash-nyanpasu)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="FlClash_MacOS"></span>
+ <font size="5">FlClash</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/chen08209/FlClash/releases)

[项目地址 chen08209/FlClash](https://github.com/chen08209/FlClash)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="v2rayU"></span>
+ <font size="5">v2rayU</font> ![oss](assets/min-oss.svg)

[从release页面下载](https://github.com/yanue/V2rayU/releases)

[项目地址 yanue/V2rayU](https://github.com/yanue/V2rayU)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="Linux"></span>
## Linux![Linux](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Linux&logoColor=000000)

<span id="Clash_Verge_rev_Linux"></span>
+ <font size="5">Clash Verge rev</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/wonfen/clash-verge-rev/releases)

[项目地址 wonfen/clash-verge-rev](https://github.com/wonfen/clash-verge-rev)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="Clash_Nyanpasu_Linux"></span>
+ <font size="5">Clash Nyanpasu</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/keiko233/clash-nyanpasu/releases)

[项目地址 keiko233/clash-nyanpasu](https://github.com/keiko233/clash-nyanpasu)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="FlClash_Linux"></span>
+ <font size="5">FlClash</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/chen08209/FlClash/releases)

[项目地址 chen08209/FlClash](https://github.com/chen08209/FlClash)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="v2rayN_Linux"></span>
+ <font size="5">v2rayN</font> ![oss](assets/min-oss.svg) ![tuijian](assets/min-tuijian.svg)

[从release页面下载](https://github.com/2dust/v2rayN/releases)

[项目地址 2dust/v2rayN](https://github.com/2dust/v2rayN)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

<span id="others"></span>
## 未整理/其它

<!-- [下载地址（蓝奏云）](https://zgq-inc.lanzoux.com/b00ob0zsj)

密码:VPN -->

[shadowsocks/shadowsocks-windows](https://github.com/shadowsocks/shadowsocks-windows)

[shadowsocksr-backup/shadowsocksr-android](https://github.com/shadowsocksr-backup/shadowsocksr-android)

***

<span id="rule"></span>
# 路由规则

含Clash，Surge，Shadowrocket，Quan，Kitsunebi规则。

`https://github.com/ACL4SSR/ACL4SSR/tree/master`

`https://github.com/DivineEngine/Profiles/tree/master`

`https://github.com/lhie1/Rules/tree/master`

***

<span id="sub"></span>
# 订阅平台<span style="color: #ff0000">（不再更新）</span>

[<font size="5">返回目录</font>](#contents)

<span id="proxypool"></span>
- <font size="5">节点池-所有国家 代理服务器 - SOCKS5</font>

[网址 free-proxy.cz](http://free-proxy.cz/zh/proxylist/country/all/socks5/ping/all)

<span id="freess"></span>
- <font size="5">Shadowsocks免费上网账号</font>

[网址 free-ss.site](https://free-ss.site/)

<span id="ProxypoolCollection"></span>
- <font size="5">上百个节点池合集</font>

[点击打开](https://github.com/ZGQ-inc/overthefirewall/blob/main/docs/proxypool.md)

<span id="AirfieldCollection"></span>
- <font size="5">上百个免费机场合集</font>

[点击打开](https://github.com/ZGQ-inc/overthefirewall/blob/68e38ba4a460fc1990ee5190dcdeae419ead0e9a/docs/airfield.md)

***

<span id="subconvert"></span>
# 订阅转换

[つつの订阅转换 · 鲸歌](https://sub.tsutsu.one/)

[ACL4SSR 在线订阅转换](https://acl4ssr-sub.github.io/)

[项目地址leosam2048/sub-web](https://github.com/leosam2048/sub-web)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

[品云订阅转换](https://id9.cc/)

[边缘@订阅转换API](https://bianyuan.xyz/)

[Subscription Converter](https://subcon.dlj.tf/)

[Subscription Converter](https://sub-web.netlify.app/)

[Subscription Converter](https://sublink.dev/)

[在线订阅转换](https://sub.789.st/)

[在线订阅转换](https://www.con8.tk/)

[在线订阅转换工具](https://sub.v1.mk/)

[在线订阅转换工具](https://sub.ffq.la/)

[在线订阅转换工具](https://sub.feng666.tk/)

***

<span id="speedtest"></span>
# 网速测试

[全球知名测速平台Speedtest](https://www.speedtest.net/zh-Hans) ![tuijian](assets/min-tuijian.svg)

[Speedtest-知名网速测试工具](http://a.ruansky.com/up/1497824)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84) ![tuijian](assets/min-tuijian.svg)

[Netflix旗下Fast.com](https://fast.com/)

***

<span id="IP"></span>
# IP查询

<iframe src="https://ip.skk.moe/simple" style="width: 100%; border: 0"></iframe>

[IPAddress.com](https://www.ipaddress.com/)

[IPAddress.my](https://www.ipaddress.my/)

***

<span id="Android_patched_VPN"></span>
# 安卓破解版VPN分享<span style="color: #ff0000">（不再更新）</span> ![tuijian](assets/min-tuijian.svg)

**<span style="color: #ff0000">如更新失败请卸载旧版本然后再安装。</span>**

<span id="vpnify"></span>
## vpnify ![tuijian](assets/min-tuijian.svg)

[vpnifyPremium_2.0.4byANiK555_enc_A2ZAPK.COM.apk](https://zgq-inc.lanzouo.com/iYg4R0ljataf)

> **最新测速结果**

22/01/08 下午1:07

下载↓ `8.42 MB/s`

上传↑ `2.43 MB/s`

22/01/05 下午3:37

下载↓ `12.0 MB/s`

上传↑ `3.04 MB/s`

> Powered by [Speedtest](https://www.speedtest.net/zh-Hans)![Speedtest](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Speedtest&logoColor=1F2033)
> 
> © 2006-2022  Ookla , LLC.All Rights Reserved

<span id="1.1.1.1"></span>
## 1.1.1.1 `Cloudflare旗下` ![tuijian](assets/min-tuijian.svg)

**<span style="color: #ff0000">第一次进入可能需要谷歌服务并且连接代理进行初始化，否则提示“发生未知错误”。</span>**

[1.1.1.1_Faster_and_Safer_Internet_Unlimited_v6.22_2970_Mod_AOSP_No_Google_A2ZAPK.COM.apk](https://zgq-inc.lanzouo.com/i1h4p0ljauvc)

> **最新测速结果**

22/09/29 下午10:35

下载↓ `14.3 MB/s`

上传↑ `2.85 MB/s`

22/08/20 下午6:56

下载↓ `14.2 MB/s`

上传↑ `2.55 MB/s`

> Powered by [Speedtest](https://www.speedtest.net/zh-Hans)![Speedtest](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Speedtest&logoColor=1F2033)
> 
> © 2006-2022  Ookla , LLC.All Rights Reserved

<span id="AdGuard_"></span>
## AdGuard VPN

[AdGuard_VPN_Premium_v2.1.51_build_131812_Mod_arm64-v8a_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/iIZVX092eleb)

## 可用且速度快

[GOVPN v1.9.5 [Premium].apk](https://zgq-inc.lanzouo.com/iCczY0m90h6f)

**疑似vpnify换皮**

## 可用但速度慢

[Hyper.VPN.v.4.9.7_arm64_A2ZAPK.COM.apk](https://zgq-inc.lanzouh.com/i68GZ002raxi)

[MasterVpnHighSpeedUsVpnv1.6arm64-v8a_A2ZAPK.COM.apk](https://zgq-inc.lanzouh.com/iCv5O001a84j)

[DarwinVPN_v1.2.23_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/iQY3Q00kcwza)

[SpeedVPN_v.1.1.3_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/i50DU00uj40j)

[Shield_VPN_Pro_v2.0.9_801_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/iq5AY00w1i1i)

[FoxSpeedVpn_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/i30Zn01g239c)

[SecureVPNVIP3.1.3-EasyAPK_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/iwR0o01j0fyf)

## 大陆无法使用

**以下大陆没有对接落地点或包含政策不提供服务，可以尝试连接其它代理后进入并覆盖当前VPN连接**

[2021-12-31PsiphonPro_A2ZAPK.COM.apk](https://zgq-inc.lanzouh.com/iG6Mcya8b4h)

[2021-12-31iTopVPN_A2ZAPK.COM.apk](https://zgq-inc.lanzouh.com/i0xp8ya8ckj)

[iTop_VPN_v3.0.0_30000_Mod_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/ibxko07lu1gb)

[VyprVpnMod_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/ie5z708xufbi)

<span id="SamsungMax"></span>
## Samsung Max ![tuijian](assets/min-tuijian.svg)

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)

来自三星的隐私 VPN，具有免费和高级级别 + 强大的数据节省功能

详情查看[![GooglePlay](assets/googleplay.svg)](https://play.google.com/store/apps/details?id=com.opera.max.global)

- **<font size="4">下载地址</font>**

[SamsungMax_v4.4.19.1_Deluxe_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/i07Pr092eltg)

**<span style="color: #ff0000">如更新失败请卸载旧版本然后再安装。</span>**

**<font size="4">破解内容</font>**：已升级至 `Deluxe+`

所有功能均已解锁，所有广告均已移除。您现在可以选择位置。

> **Deluxe+ 套餐**

- 未提供价格
- 使用全部功能
- 隐私保护不受限制
- 没有广告
- 您选择的位置

**使用方法**：

进入应用，打开`隐私保护`，可选择地区。

> **最新测速结果**

21/09/25 下午6:26

下载↓ `4.55 MB/s`

上传↑ `2.56 MB/s`

> Powered by [Speedtest](https://www.speedtest.net/zh-Hans)![Speedtest](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Speedtest&logoColor=1F2033)
> 
> © 2006-2022  Ookla , LLC.All Rights Reserved

***

<span id="Shadowrocket_Apple_ID"></span>
# Shadowrocket 小火箭账号分享 ![tuijian](assets/min-tuijian.svg)

![iOS](https://img.shields.io/badge/-iOS/iPadOS-000000?style=flat-square&logo=Apple&logoColor=FFFFFF)

<span id="GetShadowrocket"></span>
+ <font size="5">GetShadowrocket</font>

[Apple ID 已购买小火箭（Shadowrocket）账号分享](https://free.shadowrocket.online/)

<span id="Appledi"></span>
+ <font size="5">苹果帝-Appledi.com</font>

[苹果美区账号 APPLE ID 免费账号共享](https://shadowsockshelp.github.io/Shadowsocks/appleid.html)

***

<span id="Apple_ID"></span>
# 注册外区 Apple ID 帐号教程

![iOS](https://img.shields.io/badge/-iOS/iPadOS-000000?style=flat-square&logo=Apple&logoColor=FFFFFF)

部分应用大陆区App Store无法获取，个人建议注册外区Apple ID，以便获取国外应用程序。

[港区Apple ID注册流程](https://oneclick.earth/help/appleid.html)

[注册美区 Apple ID 帐号的终极指南](https://shadowsockshelp.github.io/Shadowsocks/apple-id.html)

***

<span id="hotspot"></span>
# 热点共享手机VPN给其它设备

<span id="EveryProxy"></span>
+ <font size="5">EveryProxy</font>

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)

共享手机VPN给其它设备

`支持HTTP/HTTPS/SOCKS4/SOCKS5协议`

在Android设备上运行代理服务器。

[![GooglePlay](assets/googleplay.svg)](https://play.google.com/store/apps/details?id=com.gorillasoftware.everyproxy)

[官网 everyproxy.co.uk](http://www.everyproxy.co.uk)

[使用教程](https://zgq-inc.gitbook.io/overthefirewall/every-proxy/every-proxy)![Gitbook](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Gitbook&logoColor=000000)

[官方论坛](https://groups.google.com/forum/#!forum/every-proxy)![Google](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Google&logoColor=000000)

<span id="VPNhotspot"></span>
+ <font size="5">VPN 热点</font>

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)

连接 VPN 从此更简单。通过无线中继或系统共享共享你的 VPN。（需要 root）

[![GooglePlay](assets/googleplay.svg)](https://play.google.com/store/apps/details?id=be.mygod.vpnhotspot)

[项目地址 Mygod/VPNHotspot](https://github.com/Mygod/VPNHotspot)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

***

<span id="WattToolkit"></span>
# WattToolkit（原Steam++） ![oss](assets/min-oss.svg)

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)![Windows](https://img.shields.io/badge/-Windows-0078D6?style=flat-square&logo=Windows&logoColor=FFFFFF)![MacOS](https://img.shields.io/badge/-MacOS-999999?style=flat-square&logo=MacOS&logoColor=FFFFFF)![Linux](https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=Linux&logoColor=222222)

解决Steam/Epic/Origin等平台网络错误问题，另外支持Pixiv、Google等平台的加速服务。

[官网 www.steampp.net](https://www.steampp.net/)

[项目地址 BeyondDimension/SteamTools](https://github.com/BeyondDimension/SteamTools)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

***

<span id="BlockaNet"></span>
# BlockaNet

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)

`提供HTTP/SOCKS 4/SOCKS 5协议的节点`

**<font size="4">破解内容</font>**：高级功能已解锁。

与[节点池](#proxypool)类似。

- **<font size="4">下载地址</font>**

[BlockaNet-Premium-v1.71_build_86-Mod_A2ZAPK.COM.apk](https://zgq-inc.lanzouv.com/iWKnf082tpte)

**<span style="color: #ff0000">如更新失败请卸载旧版本然后再安装。</span>**

***

<span id="DNS"></span>
# 解决DNS污染问题

有时你会发现，某些网站在国内地区无法访问，一般有三种可能：

1. 网站关闭了

2. 被墙了

3. **DNS污染**

一部分情况属于第 3 种，只是域名被SNI阻断，通过修改电脑和手机hosts文件或更改DNS服务器多数可以解决这个问题。但是像Google等网站和手机上的一些APP是直接IP都被墙了，这种办法就行不通了，只能翻墙访问。

## 什么是hosts文件？

hosts文件可以视为一个系统本地上启用的DNS服务器，我们通过编辑它能把域名定向到正确的ip，可以解锁在国内受到DNS污染的网站服务。

修改电脑和手机Hosts文件，可以绕过网络运营商的DNS，为域名指定正确的 IP 地址，达到访问被屏蔽网站的目的。

## 解决方法

### 修改hosts文件

首先通过网站IP查询工具或网站查询某一网站的所有域名的真实IP

[IP查询IPAddress](https://www.ipaddress.com/)

hosts是一个系统文件，在各个系统的位置如下

- ![Windows](https://img.shields.io/badge/-Windows-0078D6?style=flat-square&logo=Windows&logoColor=FFFFFF)：`C:\windows\system32\drivers\etc`

> 需要管理员权限

- ![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)![iOS](https://img.shields.io/badge/-iOS/iPadOS-000000?style=flat-square&logo=Apple&logoColor=FFFFFF)![MacOS](https://img.shields.io/badge/-MacOS-999999?style=flat-square&logo=MacOS&logoColor=FFFFFF)![Linux](https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=Linux&logoColor=222222)：`/etc/hosts`

> Android需要root，也可以免root使用
> 
> iOS/iPadOS需要越狱
> 
> MacOS、Linux可以直接修改

在最后面添加查询到的IP地址

然后保存，注意Windows不能直接保存，因为记事本没有写入system32文件夹的权限，点击另存为，然后把另存为的文件去除后缀.txt，然后替换原有的hosts文件。

### 更改系统DNS

- Android![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)

[DNS Changer-免root更改系统DNS](http://a.ruansky.com/up/848110)

[Dns v2-DNS测速优选](http://a.ruansky.com/up/1497626)

[DNS Optimizer-查找优质DNS并改变系统DNS](http://a.ruansky.com/up/224129)

[DNS Changer-更改DNS 隐私保护](http://a.ruansky.com/up/243968)

[Net Optimizer-网络优化&改变DNS](http://a.ruansky.com/up/261445)

[Virtual Hosts-导入Hosts文件 自定义DNS](http://a.ruansky.com/up/507051)

- Windows![Windows](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=0078D6)

打开`网络和共享中心`，点击`更改适配器设置`

进入`网络连接`页面，`本地连接`右键，点击`属性`

进去`本地连接属性`界面，点击`Internet协议版本4(TCP/IPv4)`

进去之后，把`自动获得DNS服务器地址`改成`使用下面的DNS服务器地址`

**DNS地址可以在此应用内获取**

[DNS Test-发现优质DNS服务器](http://a.ruansky.com/up/191985)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)

MacOS![MacOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=MacOS&logoColor=999999)Linux![Linux](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Linux&logoColor=000000)同理

同样的

[WattToolkit 加速Steam社区访问](#WattToolkit)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)![Windows](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=0078D6)![MacOS](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=MacOS&logoColor=999999)![Linux](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Linux&logoColor=000000) ![oss](assets/min-oss.svg)

[Accesser 🌏一个解决SNI RST导致维基百科、Pixiv等站点无法访问的工具](https://urenko.github.io/Accesser/)![Windows](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2luZG93czwvdGl0bGU+PHBhdGggZmlsbD0iIzAwNzhENiIgZD0iTTAsMEgxMS4zNzdWMTEuMzcySDBaTTEyLjYyMywwSDI0VjExLjM3MkgxMi42MjNaTTAsMTIuNjIzSDExLjM3N1YyNEgwWm0xMi42MjMsMEgyNFYyNEgxMi42MjMiLz48L3N2Zz4=&logoColor=0078D6) ![oss](assets/min-oss.svg)

也是通过更改DNS解决SNI阻断问题。

***

<span id="speedup_download"></span>
# 文件下载加速

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)![Windows](https://img.shields.io/badge/-Windows-0078D6?style=flat-square&logo=Windows&logoColor=FFFFFF)![iOS](https://img.shields.io/badge/-iOS/iPadOS-000000?style=flat-square&logo=Apple&logoColor=FFFFFF)![MacOS](https://img.shields.io/badge/-MacOS-999999?style=flat-square&logo=MacOS&logoColor=FFFFFF)![Linux](https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=Linux&logoColor=222222)

## Github文件代理加速下载

[GitHub 文件加速](https://gh.api.99988866.xyz/)

[hunshcn/gh-proxy: github release、archive以及项目文件的加速项目](https://github.com/hunshcn/gh-proxy)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

[GitHub 文件加速gh.imkcp.xyz](http://gh.imkcp.xyz/)

[GitHub 文件加速github.xiaoku666.tk](https://github.xiaoku666.tk/)

[GitHub Proxy 代理加速](https://ghproxy.com/)

[GitHub加速链接生成工具](https://github.zhlh6.cn/)

[d.serctl.com](https://d.serctl.com/)

[GitHub 加速下载 - 在线工具](http://toolwa.com/github/)

## Github镜像站

[网址 github.qqcn.xyz](https://github.qqcn.xyz/)

## 外网资源下载加速

**网站不会保留任何用户下载的文件。**

并不是先将文件下载到服务器，而是直接转发下载请求。

[网址 sudl.moeweb.site](https://sudl.moeweb.site/)

可加速Github下载

***

<span id="Hyperbeam"></span>
# Hyperbeam

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)![Windows](https://img.shields.io/badge/-Windows-0078D6?style=flat-square&logo=Windows&logoColor=FFFFFF)![iOS](https://img.shields.io/badge/-iOS/iPadOS-000000?style=flat-square&logo=Apple&logoColor=FFFFFF)![MacOS](https://img.shields.io/badge/-MacOS-999999?style=flat-square&logo=MacOS&logoColor=FFFFFF)![Linux](https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=Linux&logoColor=222222)

A Better Way to Watch Together Online

[官网 hyperbeam.com](https://hyperbeam.com/)

一个支持在线浏览器屏幕共享的聊天室平台，后台基于Linux系统，浏览器画面通过P2P远程传输，服务器在欧洲，可以实现免梯子访问外网。

注册账号，创建自己的房间即可，可以私用，也可以发送邀请链接，与他人共享画面。

***

<span id="blacklist"></span>
# 翻墙软件&机场黑名单

翻墙这种事，国家睁一只眼闭一只眼，就大陆来看，就有几百万“违法人员”，可是网警没这么多功夫陪这么多人喝茶，但是时不时抓几个杀鸡儆猴还是可以做到的，轻一点2000～50000，重一点派出所免费住宿，排除言论不当的，一年几十个案例，所以小心为妙，梯子安全一般不会有事。

[中国翻墙软件黑名单-持续更新](https://www.google.com/amp/s/10beasts.net/china-fanqiang-tools-blacklist/amp/)

[机场曝光/机场黑名单@jichangBG](https://t.me/jichangBG)![Telegram](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Telegram&logoColor=31A6E0)

[2021中国翻墙软件VPN推荐指南](https://vpncn.github.io/)![Github](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Github&logoColor=0E1E47)

[<font color="#FF0000">国家反诈中心是后门软件，请勿安装！（点击查看详情）</font>](assets/image/20220410_121354.jpg)

[<font color="#FF0000">MIUI13疑似翻墙自动报警！已证实内置国家反诈中心！（点击查看详情）</font>](assets/image/Screenshot_20220406-225445.jpg)

**后来听说有人是OPPO，vivo，魅族没安装国家反诈中心被打电话，有人鸿蒙也收到了国家反诈中心的短信，建议是能不用国产手机翻墙就不用。**

[翻墙被抓案例.jpg](assets/image/RDT_20220410_1332237515022397726360175.jpg)

[维基百科摘录](blacklist-Wiki.html)![Wikipedia](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Wikipedia&logoColor=2E2E2E)

[案例集合（项目作者的频道）](https://t.me/ZGQincLiqun/1655)![Telegram](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Telegram&logoColor=31A6E0)

 <font size="5" color="#FF0000">黑名单列表（点击查看详情）</font>

<details><summary><span style="color: #ff0000">老王VPN</span></summary>

有读者和我说对这款老王VPN的安全性有疑虑，据我的了解和调查，老王VPN可能存在钓鱼风险，网上查得到有人因为在手机上使用老王VPN被请喝茶的消息。我自己在手机上测试了一下，下载的最新版，连接方式选择快速连接，显示连上了，已经翻墙状态了哇，结果一查IP笑死我，原本的IP纹丝不动，依然和本地IP一样，这就存在安全隐患了。而老王也是案例最多的一个，最近一个已知案例为2022年4月份。

</details>

<details><summary><span style="color: #ff0000">极光VPN（原佛跳墙VPN）</span></summary>

稳定性和安全性都不太好，不建议使用。这款虽然名字叫VPN，但我觉得底层还是基于SS的，而且DNS会有泄漏，对隐私数据的保护不好。不推荐佛跳墙VPN，看到的避免入坑。

</details>

<details><summary><span style="color: #ff0000">蓝灯VPN</span></summary>

目前网上流传的蓝灯VPN安全性有漏洞，虽然名字叫蓝灯VPN，但它是基于socks5代理，并不具备传统OpenVPN、L2TP/IPSec、IKEV2等VPN协议的安全性。另外有人使用蓝灯(Latern Pro)软件翻墙上Pornhub和维基百科，被行政处罚了。总之，能不用就尽量避免吧。

</details>

<details><summary><span style="color: #ff0000">小牛VPN</span></summary>

小牛VPN被同行查过，有个专门窃取你个人隐私的后门，比老王VPN这种钓鱼的还要恶心。如果你不想被偷窥，那么最好不要入坑。

</details>

**黑洞加速器、旋风加速器、雷霆加速器、蜜蜂加速器**都是换皮VPN，由某个国内团队开发，而2021年八月份就有人因为使用旋风加速器被行政处罚。

其他国产的私人或者小型VPN避免使用，这些大部分都是名字叫VPN，只有翻墙的功能，并无安全性可言。其中不少涉嫌钓鱼，用户使用的时候被ISP发现并上报的，已经有记录的就有**极光加速器、QuickQ、佛跳墙加速器、老王VPN、IP精灵、旋风加速器、坚果加速器、蚂蚁加速器、快连VPN、神风加速器**等。

总的来说，**像谷歌商店里面的很多国产翻墙软件最好不要碰**。而且目前网上因为翻墙出问题的，一般都是使用这种野路子VPN翻车的，这种翻墙软件我是不会使用的，测试都不敢。最好是使用**国外知名的VPN服务或机场**，**最重要的是安全，不泄漏隐私信息**。

***

<span id="Android_software"></span>
# Android软件

![Android](https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF)

[<font size="5">返回目录</font>](#contents)

<span id="Telegram">![Telegram](https://img.shields.io/badge/-Telegram-31A6E0?style=for-the-badge&logo=Telegram&logoColor=FFFFFF)</span>

[Telegram魔法版](http://a.ruansky.com/up/1490371) ![tuijian](assets/min-tuijian.svg)

[Telegraher-Telegram第三方客户端（破解官方限制）](http://a.ruansky.com/up/524938) ![tuijian](assets/min-tuijian.svg)

[Telegram 主题-海量Telegram主题](http://a.ruansky.com/up/163551)

[Sticker Downloader-电报贴纸包下载器](http://a.ruansky.com/up/312604)

[Telegraph X Pro-发布文章 Telegram旗下](http://a.ruansky.com/up/477318) ![tuijian](assets/min-tuijian.svg)

[TForwarder-Telegram自动转发消息](http://a.ruansky.com/up/477755)

<span id="Google">![Google](https://img.shields.io/badge/-Google-000000?style=for-the-badge&logo=Google&logoColor=FFFFFF)</span>

[GO谷歌安装器-一键安装GMS](http://a.ruansky.com/up/129340) ![tuijian](assets/min-tuijian.svg)

<span style="color: #ff0000">小米</span>![Xiaomi](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Xiaomi&logoColor=FF6900)<span style="color: #ff0000">手机需要在系统设置里开启谷歌服务，否则无法使用谷歌应用。</span>

<span style="color: #ff0000">华为</span>![Huawei](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Huawei&logoColor=D1092E)<span style="color: #ff0000">新机型无法安装谷歌服务，建议使用下方的第三方谷歌商店。</span>

部分品牌手机安装谷歌商店后桌面无图标，请先尝试重启。

三星![Samsung](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Samsung&logoColor=024DA1)等部分品牌的手机自带谷歌服务，国行移除了谷歌商店，使用安装器安装即可。

[Play Services Info-GMS谷歌服务完整性检查](http://a.ruansky.com/up/131039)

[AppSales-谷歌商店优惠&限免通知](http://a.ruansky.com/up/707608)
 ![tuijian](assets/min-tuijian.svg)

[AppsFree-发现谷歌商店限免应用](http://a.ruansky.com/up/888376)

[APKPure-知名第三方谷歌商店](http://a.ruansky.com/up/1020760) ![tuijian](assets/min-tuijian.svg)

[Appvn-第三方谷歌商店](http://a.ruansky.com/up/261239)

[Aptoide-第三方谷歌商店](http://a.ruansky.com/up/256651)

[Aurora Store-第三方谷歌商店](http://a.ruansky.com/up/232774)

[Uptodown App Store-第三方谷歌商店](http://a.ruansky.com/up/273533)

[β-Maniac-管理谷歌商店测试版应用](http://a.ruansky.com/up/478215)

[App Watcher-谷歌商店应用更新跟踪](http://a.ruansky.com/up/467849)

<span id="YouTube">![YouTube](https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=YouTube&logoColor=FFFFFF)</span>

[Vanced Manager-强大的第三方YouTube](http://a.ruansky.com/up/261259) ![tuijian](assets/min-tuijian.svg) `已停更`

[**最后的Vanced**蓝奏云备档](https://zgq-inc.lanzouv.com/b00pgxnha)

密码：`vanced`

[LibreTube-可观看YouTube付费视频](http://a.ruansky.com/up/888321) ![tuijian](assets/min-tuijian.svg)

[ViMusic-YouTube Music第三方客户端](http://a.ruansky.com/up/1021025) ![tuijian](assets/min-tuijian.svg)

[Vanced Manager v2-Vanced第三方维护版本](http://a.ruansky.com/up/763087)

[NewPipe-YouTube第三方客户端](http://a.ruansky.com/up/1015543)

[Float Tube-第三方YouTube](http://a.ruansky.com/up/232269)

[GoTube-无广告YouTube客户端](http://a.ruansky.com/up/507181)

[Snaptube-YouTube视频下载器](http://a.ruansky.com/up/1490240) ![tuijian](assets/min-tuijian.svg)

[TubeMate（版本更新）-YouTube视频下载器](http://a.ruansky.com/up/179362)

[PowerTube-视频下载器](http://a.ruansky.com/up/254341)

<span id="Twitter">![Twitter](https://img.shields.io/badge/-Twitter-1D9BF0?style=for-the-badge&logo=Twitter&logoColor=FFFFFF)</span>

[Twitter-Aero修改版](http://a.ruansky.com/up/1036601) ![tuijian](assets/min-tuijian.svg)

由于推特对第三方客户端实施了禁令，现在只有修改版可以使用。

[Tweet2Pic Pro-Twitter推文转图片](http://a.ruansky.com/up/707922)

<span id="Facebook">![Facebook](https://img.shields.io/badge/-Facebook-0470E5?style=for-the-badge&logo=Facebook&logoColor=FFFFFF)</span>

[Swipe-第三方Facebook](http://a.ruansky.com/up/226321)

<span id="Netflix">![Netflix](https://img.shields.io/badge/-Netflix-221F1F?style=for-the-badge&logo=Netflix&logoColor=E21221)</span>

[Netflix-第三方换源Netflix](http://a.ruansky.com/up/507093) ![tuijian](assets/min-tuijian.svg)

<span id="Spotify">![Spotify](https://img.shields.io/badge/-Spotify-1DB954?style=for-the-badge&logo=Spotify&logoColor=000000)</span>

[xManager-Spotify破解版下载器](http://a.ruansky.com/up/1493510) ![tuijian](assets/min-tuijian.svg)

[SpotiFlyer-Spotify音乐下载器](http://a.ruansky.com/up/407302)

<span id="Pixiv">![Pixiv](https://img.shields.io/badge/-Pixiv-0096FA?style=for-the-badge&logo=Pixiv&logoColor=FFFFFF)</span>

[Pixiv官方版客户端破解会员](http://a.ruansky.com/up/1497680) ![tuijian](assets/min-tuijian.svg)

[Shaft-第三方直连版客户端](http://a.ruansky.com/up/1497597) ![tuijian](assets/min-tuijian.svg)

[PixEz-第三方直连版客户端](http://a.ruansky.com/up/524797)

<span id="WhatsApp">![WhatsApp](https://img.shields.io/badge/-WhatsApp-35DB53?style=for-the-badge&logo=WhatsApp&logoColor=FFFFFF)</span>

[WhatsApp-Aero修改版](http://a.ruansky.com/up/1036536) ![tuijian](assets/min-tuijian.svg)

[GBWhatsApp-WhatsApp第三方客户端](http://a.ruansky.com/up/524806) ![tuijian](assets/min-tuijian.svg)

[WABox-WhatsApp工具箱](http://a.ruansky.com/up/467721)

[WhatsTool-WhatsApp工具箱](http://a.ruansky.com/up/243972)

[状态保护程序-WhatsApp媒体下载器](http://a.ruansky.com/up/524741)

<span id="Reddit">![Reddit](https://img.shields.io/badge/-Reddit-FF4500?style=for-the-badge&logo=Reddit&logoColor=FFFFFF)</span>

[Reddit-破解会员](http://a.ruansky.com/up/231175)

[Reddit-修改版](http://a.ruansky.com/up/1021386)

[rif is fun golden platinum-第三方Reddit](http://a.ruansky.com/up/300147)

[BaconReader Premium（版本更新）-第三方Reddit](http://a.ruansky.com/up/300136)

[Joey-第三方Reddit](http://a.ruansky.com/up/354247)

[Now for Reddit-Reddit第三方客户端](http://a.ruansky.com/up/493119)

[Sync Pro-Reddit第三方客户端](http://a.ruansky.com/up/707742)

<span id="Instagram">![Instagram](https://img.shields.io/badge/-Instagram-D63173?style=for-the-badge&logo=Instagram&logoColor=FFFFFF)</span>

[Instagram-Aero修改版](http://a.ruansky.com/up/1036573) ![tuijian](assets/min-tuijian.svg)

[Instander-Instagram修改版](http://a.ruansky.com/up/1490341) ![tuijian](assets/min-tuijian.svg)

[iGetter Pro-Instagram视频下载器](http://a.ruansky.com/up/457943)

<span id="VKontakte">![VKontakte](https://img.shields.io/badge/-VKontakte-0079FF?style=for-the-badge&logo=VK&logoColor=FFFFFF)</span>

[VK Mod-VKontakte修改版](http://a.ruansky.com/up/337748) ![tuijian](assets/min-tuijian.svg)

[VK Minus-VKontakte精简版](http://a.ruansky.com/up/337749) ![tuijian](assets/min-tuijian.svg)

[KatePlus-VKontakte第三方客户端](http://a.ruansky.com/up/822107)

[VK mp3 mod-第三方VKontakte](http://a.ruansky.com/up/232247)

[VK Музыка-VK旗下音乐平台](http://a.ruansky.com/up/353474)

<span id="TikTok">![TikTok](https://img.shields.io/badge/-TikTok-000000?style=for-the-badge&logo=TikTok&logoColor=FFFFFF)</span>

[TikTok（修改版 配合插件使用）](http://a.ruansky.com/up/1499334) ![tuijian](assets/min-tuijian.svg)

[TikTok 插件（需配合修改版使用）](http://a.ruansky.com/up/1490304) ![tuijian](assets/min-tuijian.svg)

<span id="Twitch">![Twitch](https://img.shields.io/badge/-Twitch-9146FF?style=for-the-badge&logo=Twitch&logoColor=FFFFFF)</span>

[PurpleTV-Twitch修改版 原TwitchMod](http://a.ruansky.com/up/1521942) ![tuijian](assets/min-tuijian.svg)

[Xtra-Twitch开源第三方客户端](http://a.ruansky.com/up/743114) ![tuijian](assets/min-tuijian.svg)

[Impulse-第三方Twitch](http://a.ruansky.com/up/292424)

<span id="LINE">![LINE](https://img.shields.io/badge/-LINE-21BA52?style=for-the-badge&logo=LINE&logoColor=FFFFFF)</span>

[LINE Camera-日本知名社交平台LINE旗下照片美化](http://a.ruansky.com/up/326559)

<span id="Discord">![Discord](https://img.shields.io/badge/-Discord-4F5BDA?style=for-the-badge&logo=Discord&logoColor=FFFFFF)</span>

[Discord-修改版](http://a.ruansky.com/up/822164)

<span id="Mastodon">![Mastodon](https://img.shields.io/badge/-Mastodon-5347CF?style=for-the-badge&logo=Mastodon&logoColor=FFFFFF)</span>

[Megalodon-Mastodon第三方客户端](http://a.ruansky.com/up/1493274)

[Tusky-Mastodon第三方客户端](http://a.ruansky.com/up/1497793)

<span id="multifunction"></span>
- <font size="5">多功能</font>

[Feedster-国外社交媒体6合1](http://a.ruansky.com/up/305541)

[TeeHub-Twitter & Tumblr 二合一](http://a.ruansky.com/up/310301)

[Friendly-国外社交媒体多合一](http://a.ruansky.com/up/703021)

[Friendly IQ-国外社交媒体账号管理器](http://a.ruansky.com/up/703025)

<span id="upload"></span>
- <font size="5">2000个安卓破解软件</font> ![tuijian](assets/min-tuijian.svg)

[点我查看](https://zgqinc.gq/rtk_up)

***

<span id="sponsor"></span>
# 赞助内容

<font size="6">起飞VPN</font>

[官网 goflyvpn.com](https://goflyvpn.com/)

[![GooglePlay](assets/googleplay.svg)](https://play.google.com/store/apps/details?id=com.ambrose.overwall)

> Telegram频道 [@ShareOpenVPN](https://t.me/ShareOpenVPN)![Telegram](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Telegram&logoColor=31A6E0)
> 
> Telegram群组 [@freessrvpn](https://t.me/freessrvpn)![Telegram](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Telegram&logoColor=31A6E0)

***

<span id="Q&A"></span>
# 常见问题

+ **MIUI系统VPN授权弹窗点击`确认`为什么没反应？**

> **网络连接请求**
> 
> “-"想要设置一个VPN连接,以便监控网络流量。除非您信任该来源，否则请勿接受此请求。

**`答`**：MIUI重启解决99%的问题。

+ **安卓破解版VPN栏目的[vpnify](#vpnify)为什么无法连接？**

**`答`**：首先可能是因为地区无法连通VPN服务，也有可能是因为国产魔改系统对国外软件兼容性较差，建议使用原生或是类原生系统。

+ **为什么[iOS客户端](#iOS/iPadOS)的在线安装无法安装或是安装完成后无法打开？**

**`答`**：在线安装内为旧版本安装包，是由于iOS版本太高（iOS15或以上）导致的兼容性闪退，建议使用其它客户端比如[OneClick](#OneClick)，以及可以尝试降级。

+ **为什么连不上？**

**`答`**：免费资源不能保证可用性，有可能已失效，如果需要长期稳定快速的服务，建议使用付费机场，<font color="#FF0000">推荐</font>[此项目赞助商](#ads)。

+ **速度太慢怎么办？**

**`答`**：免费资源无法保证速度，同上。

+ **不会用怎么办？**

**`答`**：别人都会，就你不会。

+ **看不懂怎么办？**

**`答`**：那就别看。

+ **找不到怎么办？**

**`答`**：去看一下眼科。

+ **太麻烦了吧。**

**`答`**：那就别搞。

***

<span id="thanks"></span>
# 鸣谢

- [GitHub用户Ibroad](https://github.com/Ibroad)

> 修复目录跳转问题

- [A2ZAPK安卓破解网](https://a2zapk.com/)

> [安卓破解版VPN分享](#Android_patched_VPN)![Android](https://img.shields.io/badge/--FFFFFF?style=flat-square&logo=Android&logoColor=3DDC84)来源

- [软天空平台](http://imtt.dd.qq.com/16891/apk/053D5936E7F1A25D91B538B3313F67F1.apk?fsname=%E8%BD%AF%E5%A4%A9%E7%A9%BA.apk)

> 提供部分下载地址

以及本项目中所有引用链接和内容。

***

<span id="announce"></span>
# 声明

所有资源均来源于网络搜集，如有侵权请[联系我](https://zgqinc.gq/#about)删除。

![CC](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 🄯 进行许可。

***

<span id="donate"></span>
# 捐赠

**推广这个项目**就是对项目最好的**捐赠**和**支持**。

***

[<font size="5">回到顶部</font>](#top)