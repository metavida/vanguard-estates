# Vanguard Estates Player

A mini-site that helps folks easily listent to the wonderful [Vanguards Estates choose your own path story](https://www.flashforwardpod.com/2022/10/31/welcome-to-vanguard-estates/) from [Flash Forward](https://www.flashforwardpod.com/).

## Start listening

https://www.flashforwardpod.com/vanguard-interactive/

[![Welcome to Vanguard Estates logo](https://www.flashforwardpod.com/wp-content/uploads/2022/10/HEADER.jpg)](https://www.flashforwardpod.com/vanguard-interactive/)

This is an un-official fan project that I made in hopes that even more people will get to enjoy the story! Fortunately Rose liked it too, so now it's hosted on the official Flash Forward website!

## Story structure

A visualization of the paths available in the story

```mermaid
graph LR
    1[Welcome to Vanguard Estates]
    1 --> 2
    1 --> 3
    2[Stay at Vanguard]
    2 --> 6
    2 --> 7
    3[Bring Him Home]
    3 --> 4
    3 --> 5
    4[Buy A Home Robot]
    4 --> 8
    4 --> 9
    5[Call Him More]
    5 --> 10
    5 --> 11
    6[Use Drop-In]
    6 --> 12
    6 --> 13
    7[Disable Drop-In]
    7 --> 14
    7 --> 15
    8[Explain Missy]
    8 --> 16
    8 --> 17
    9[Don't Explain Missy] %% end
    10[Install Cameras]
    10 --> 18
    10 --> 19
    11[Move Him In]
    11 --> 20
    11 --> 21
    12[Don't Tell Him]
    12 --> 22
    12 --> 23
    13[Tell Him]
    13 --> 24
    13 --> 25
    14[Robot Baths]
    14 --> 26
    14 --> 27
    15[Human Baths] %% end
    16[Go To Manila] %% end
    17[Don't Go To Manila] %% end
    18[Handle it Yourself] %% end
    19[Pay for Help] %% end
    20[Drop Out of School] %% end
    21[Take Out a Loan] %% end
    22[Stop the Robot] %% end
    23[Trust the Robot] %% end
    24[Keep His Secret] %% end
    25[Report Him] %% end
    26[Break the News] %% end
    27[Keep Quiet] %% end
```

## Local development

If you've got most-any version of node installed, you can serve this app locally using the following:

```bash
npx serve@latest -l 3027
```
