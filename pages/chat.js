import React, {useEffect, useRef, useState} from 'react';
import {
    Avatar,
    Box, Divider, Drawer, FormControl,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import {FiMenu, FiSend} from "react-icons/fi";
import {useSelector} from "react-redux";
import {sendMessage} from "../Redux/actions/doing";

function Chat(props) {
    const {users, chat} = useSelector((state) => state.messages)
    const [selectedUser, setSelectedUser] = useState(
        {
            userName: "Sumayya",
            job: 'Seamstress',
            online: true,
            avatarUrl: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ2NDgsIDIwMjEvMDEvMTItMTU6NTI6MjkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NkI0RTE1NkM2OTI5MTFFNjk5MDBEODU4OTFFRTc1RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk3QzBBMkM3QTUxMTFFQkI0NTdFQjQ2NTI0MERFQTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk3QzBBMkI3QTUxMTFFQkI0NTdFQjQ2NTI0MERFQTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDhjNmYxMDMtOGNjMS0yYTRjLTkxMjMtMGJiM2QwNmRlMzdjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCOUY2QTY1NzQ3QjExRTc5NDM5RjY5MTJFMDkyOUE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAyADIAwERAAIRAQMRAf/EALEAAQACAwEBAQEAAAAAAAAAAAAGBwQFCAMCCQEBAQACAwEBAAAAAAAAAAAAAAADBQIEBgEHEAABAwMCAwUDBgwEBgMAAAABAAIDEQQFEgYhMQdBUSITCGFxFIGRMkJSFaHB0WJygqLSI5QWGENzJDSxkrIzs0QldTcRAQACAQIEAwQGCgIDAAAAAAABAgMRBCExEgVBURNhkSIycYGhsWIV8MHRQlIjMxQGFuFy8ZI0/9oADAMBAAIRAxEAPwDpxZAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgrvqj1z2b0+Atb1z7/NvZrixVsRrAP0XTPPhiafbUnsaVs4NrbJy5MZtoobJesjfktwXY7DYy1tq1bHOJ7h9O4vbJAD8jQrCvbaeMyx60k2d6yGS3LLfd2GbbxPIDr/HOcWsr2ugkLnEe59fYVFk7b/DPvIu6MwubxOcxkGUxF3He4+5bqguYTqa4A0PuIIoQeIKrbVms6TzZs1YvRAQEBBhZvOYjB4u4yuXu47LH2rdc9zKaNaOQ9pJPAAcSeAWVazadI5vHOO8PWQ2O5kt9oYVs0LDRt/knOAfTtFvEWuA7iZK+wKyx9t/in3MJujuM9ZG/IpwclhsZd29auZAJ7d9O4PdJMP2VLbttPCZOtfHSzrns/qEDa2ZfYZuNpfLirgjWWjm+J48MjR8jh2tAVfn2tsfPjDKLarFWsyEBAQEBAQEBAQEES6rb5j2RsTJ7go191CwRWETuT7mU6IgR2hpOpw+yCptvi9S8VeTOj8+8nk8hlMhcZHI3D7q+u3uluLiQ6nve41JJXR1rERpCFir0EF2el3qXebe3rDtm6mJwmfkELYnHwxXhFIXsry8w0jd31HctHfYItTq8YZVl2eqNKICAgIOL/VD1LvNxb1n21ayluE2/IYDE1x0y3gFJpHjlWM1jb3UJ+srzY4IrTq8ZRWlSi3mIgysXlMjicjb5LG3D7W/tHiW3uIzRzHt5ELy1YmNJH6C9K98R722LjNwABlzOwx30TeTLmI6JQB2Akam+whc5uMXp3mqaJ1SxQvRAQEBAQEBAQEFCesd9wOnmJa0kQOy0fm05Fwtpy0H8KsO2/PP0ML8nH6ukYgINht69+Bz+MvvM8r4W7gn8018PlyNdq4ceFFjeNYmB1DvP1h4GzkkttpYp+Uc3gzIXZNvBX7TYqea8fpaCqnF26Z+adEk3VPmfVF1gyL3eRkoMZE7/AArO2ioB+lMJn/tLcrscUeGrHqloj126vF2r+qb2ta82U+bTRSf2mL+GHnVLcYn1N9Y8e8a8wy/jH+Fd20Dgfe5jY5P2lhbY4p8NHvVK0tnesiymkZb7vwxtdRAdf45xkjFe10Eh1gD2PcfYtTJ22f3Z972LuZ87ei/zeQvg8yC6uZpxIagu8yQurx76q0pGkRDBgrIEBB2D6OH3B6d5Zr6+Q3LSeUTyqbeDUB+BUvcvnj6ElOS+lXsxAQEBAQEBAQEEH60bEk3t08yWFtx/8g0C6x1aAG4g8TWVPLzBVleyqn22X07xPgxtGsOALi3ntriW2uI3Q3EL3RzQyAtex7DRzXNPEEEUIXRROqJ5r0EBAQEBAQEBAQEHra21xd3MVrbROmuZ3tighjBc973nS1rQOJJJoAvJnQfoB0a2K/ZPT3GYS4A+8KOuciW8viJzqc2vboFGV7dK53c5fUvM+CaI0hNlA9EBAQEBAQEBAQEFR9XPTptnfc78tYy/c2430827YzXDcU4Dz4qt8VBQPaQe/VwpubfeWx8J41YzXVzH1E6F732FYfeWadZyY90wgiuLecO1yOBIDY3iOQ+FpP0exWuHdUyTpHNHNdFeLZeCAgICAgICAgnfTXo1u3qEy4lwclnHBaSNiupLmbQ6PUNTXGNgfJpdxodNDQ9y18+5rj5vYjV1J0j9Om2tiTsy17L98biaP4d09miG3JFD5EZLvFxprca92niqncby2ThHCqSK6LcWmyEBAQEBAQEBAQEBAQcR+p3qA/c/UKbF2764rbuuygaDwdcVHxMnv1tDPc1Xuxw9FNfGyK08VQLdYiAgICDbbTw8ea3NisRI4sZkLqK1c8c2+c8M1fJVa+6zeniteP3Ymfczx16rRHm195aXFndz2lw3RcW0jopmH6r2OLXD5CFNS8WiJjlLGY0nR4rJ4ILD6E9QpNk9QbG8ml0Yi/cLLKgmjRDKQBKf8p9H+4Edq1t3h9Skx4w9rOku+FzyYQEBAQEBAQEBAQEBBpt559m3tpZjOOofu2znuWNP1nxxksb+s6gWeKnVaI83kvzfllkllfLK4vkkcXPeeJLnGpJXToXygICAgIJN0x//AEbbH/2lp/5mrR7n/wDNk/6W+5Nt/wCpX6YSr1F7XGF6jXF3EzRaZmNt7HTl5p8Ew95e3Wf0lof49uvV20RPOnD9n6exNvsfTk181Xq9aYgIP0J6Obkk3H0x27lpX+ZcSWjYbl55umtiYJHH2udGSub3NOnJMJongmSheiAgICAgICAgICAgrP1J3clt0X3E6Pg6QW0VfzZLuJrv2SVtbKNcsMbcnF2xNvs3DvLD4WTV5F7dRx3Gjg7ya6pS09h8sFW2+3Ho4b3jnWPt8PteYadV4jzdM/2x9Mu6+/mB+4uI/wBl3X4fcuPy/H7T+2Ppl3X38wP3E/2Xdfh9x+X4/af2x9Mu6+/mB+4n+y7r8PuPy/H7T+2Ppl3X38wP3E/2Xdfh9x+X4/af2x9Mu6+/mB+4n+y7r8PuPy/H7WZhfTz09w+XssrZi8+LsJ47mDXOHN1xODm6hpFRUKPN/kG4yUmlunS0acmVNjjrMTGvBIt99NNsb4js2ZxkpNiXm3fA/wAtw80NDwTR3A6AtLY9yy7WZ9PT4vNLm29cmnV4Ij/bH0y7r7+YH7isf9l3X4fcg/L8ftP7Y+mXdffzA/cT/Zd1+H3H5fj9rnbqttG12lvrI4Sy1mxh8qS0dIdTjHLE1/E0FaOJHyLse17udxgre3zTrr71VucUUvMRydSeki8fP0nMTuVpkrmFnuLY5f8AjKVp9wj+Z9TCnJdK0WYgICAgICAgICAgw77IstvA0a5SK07B71X7zfxh4Rxs2tvtpycZ4Qr/AHxfbQ3hjLvZuYzFsw3jmCWzguYY7oPikbI3S1xc6oc0c2rUxdw3dP5kV+H/AKzp+n1tqdrh+XXj9Ks9i9BLnZ/U+2zEF18bg4Le4fbyyUbNHM9oiEcgFAatlcQ5vdxA4Lb33fY3G1mkx03mY18tOf6mOHZenk15wu1cwsBAQEBAQEBAQU51V6J3u+d+4/Ix3DLHFtshFkbmgdIXRyOLWxs7XOa+lTwAHyHo+196rtdvasx1W6uEfU0NztJyXieUaJtsNmyOnOP/AKUxmat2SSTuuH297dQG5fLI1rD4B5Z4iMcA1RZe47zN/M6fh9lZ0I2uGvDXj9KyrDKNuHeXIAyXspyKm2fcIyz024W+9BuNrNI1jjDOVm0xAQEBAQEBAQEEZuXukuJHu5lxXHbi82yWmfNf4qxFYiGuusPibu2ltrqygnt5yXTQyRscx7nGpLmkUJr2rGua9ZiYmYmGU1ieEw1WzXzxQ5PFSSPnjw98+ztZ5XF73QOhiuY2ueeLvLFx5dTx8PGpWxvIiZrfl111n6dZj7dNfrR4vGPKUhWmlQrqx1Jg2FtxuRFuLu+upfh7K2JLWl+kuc95HHS0Ds4k0HtFn2rt07rJ066ViNZlr7nP6VdfFDuj3Xq93lnn4HNWMFreyRvls57XWI3eWKuY5r3PIOniDXsVl3fsVdtj9SkzNfHVBtd5OS3TMLmXNN9p8plbmxz2Gt3Fox+SNxauJHiF0IxPB4q8AY4Zh76LZxYotjvP71dJ+rlP2zDC1tLR5S3C1map+tPWufYt1Z4rFWcV3lrmL4mR1yXeVFCXFjfCwtc5zy131hSnbVX/AGbs0bqJveZikcOHOZaW73fpzERHFs+jfVn+v8dei6tG2eUxzoxcxxEmJ7JQ7Q9mrxDixwLTWnfxUPeO1f2lo0nWtuXnwZ7Xc+rE684WKqZtNDva7vIMF5dnO61uL26tLBt2ymqFt5cxwPkbX6wbIdH51Ft7KtZya2jWKxa2nn0xM/8An2I8szFeHjpHvZuP27g8dYMx9nYwx2jOPl6A7U7te8uqXvJ4lzqkniVFk3GS9uqZnVlWlYjSIbJjnMcHNNHNNQfaFHW01mJjwezGsaSlQNQD3rtInWHPSL0EBAQEBAQEBBospZvindKBWJ5rXuJ5grme4bWaXm0fLK42uaLV08YYKrm0UHzoCCJdTOnWO33t77qupnWtxDIJ7K8a0PMcgaW+JpI1NcHcRUfgVh23uFtrk64jWJ4TCHcYIyV0lFOlHQa02Rl5M1eZEZLI+W6G2DIvKjia/g53Fz3OcW8OygJ5qw7r32dzTorXpr48eaDbbOMc6zOsrYXPt1H99QTO23PeW7dd1inx5K3aObnWbxM5g/zI2uZ+stzY2j1YrPK3w/8Atw+zmjzR8Ovlx9zeQTw3EEc8LxJDK0PjeOTmuFQR7wtW1ZidJ5pInVXHVzotY7+ltb+G9+7svax+QJizzI5IdRcGPaC0gtc4kOHeeHdc9p7zbaRNZjqpPH62pudpGXjrpLYdJ+lNh0/xt1Ey6N9kb9zXXd2WeW3THXQxjKuoG6j28T8gUPde6W3donTprXlDLbbaMUecynaqmy/hAPMV7fmXo/q8GVYWb7iYcP4TTV7vxLd2W1nLf8Mc0G4zRSvtSFdUpBAQEBAQEBAQEAgEUIqDzBXkxqRLw+As9WryW193D5lrf2WHXXphN/cZPOWgu2aLqVoFAHmg9leC5nc16clo9srjDbWkT7HkoEggICDUZTdm08dI61yeWsraY+F1tNPE2Q1H0fLJ1GoPKi2cW1zXjWtbTHnET97C2SscJmGv6cXDX7Ut7Zhc+HHSTWNtK5rm+Zb28jmW7xqAJ1QBnHvUvca6ZZnxtpM/TMcft1Y4J+HTySdaKUQEH1G3VI1v2iB86zpXW0R5vLTpGqRGwsyamFtfcurnZ4pnXphSRuL+cvZrWtaGtAa0cgOAU9axEaQimZnm/qyeCAgICAgICAgICAg0eYh0XeunCQA/KOBXN90xdOXX+Jb7K+tNPJgKsbYgICDyjtraOV8scTGSymskjWgOcfziOJWU2mY0mTR6rEEBAQZeLh8y8Z3M8Z+Tl+Fb3b8XXlj2cWvu79OOfakC6lSiAgICAgICAgICAgICDFyVr59sdIrIzxM/GFo7/b+rj4fNHJsbXL0W48pR5csuhAQSzFTxz2MZFNTAGPHcW8Pwrqdlki+KPOOCl3NJreWXpb3BbekINXjezx21tJK6nhHhHe48godxkjHSbSkxUm9ohDlyK9EBBvcTamKDzHCj5ONO4di6Xtm36KdU87fcqN5l6raRyhnKyaggICAgICAgICAgICAgINRlMcQXXEQ8J4yNHZ7VRdx2Okzkpy8f2rLabn9231NWqVYCD2tbue1k8yF1D2jmCPaFNhz2xzrWWGTFW8aS2Y3LNp4wt1d9TT5lZfm9tPljVp/2EebXXl/c3bgZncB9Fg4NCr8+5vln4pbWLDWkcGOtdKINhjMeZnCaUfwm/RB+sfyK07fsuueu3yx9rT3W56Y6Y5t2ujVIgICAgICAgICAgICAgICAgj2SjZHeyNYA1vA0HLiAVym/pFc0xEaR/wALva2mccTLFWmnEBAQfMkkcbdT3Bre8miTOj2ImeTwssjFcZS3t2N1RPeA9zu0ewKTaTF81azymWWfFNcVreOiaAACg4AcguyiNHNC9BAQEBAQEBAQEBAQEBAQEBBH8t/v5P1f+kLl+5f15+r7lzs/6cMMgEUPJaDaY8kN23jBNw+xIKj/AJuaxmJ8JZxavjDHfPmGf4THDvbx/GsJm6SK458WO+5zDuGh7f0WfjosZtdJFMbx+CyMzqvY4nvefyrHotLP1KQ2mDxL4slbyyPFWuqGt93eVvdvxaZqz7WnvM+uO0R5Jsuyc0ICAgICAgICAgICAgICAg1ec3TtrAw+dm8raY2OlQbqZkRdT7IcQXH2BZ0xWv8ALEy8mWi211b2Jui4vLfb2RGQmsdPntax8fB1QHN80MLm1FNTRT5woO4WttYib1n4uSfBh9XlPJmXdx8RO6XTp1U4VryFFye5zerebaaarjDj6KxV4qBIICAgIPS3l8mZktNWg1pyUuHL0Xi3kwyU6qzHm8dzdU9l7Vgt5txXwx7bp/lwgtfK5xAqSGRB79Le06aBdX2/LbdTMUrOsc/L3qfcYPT4zLZ7e3rtHckfmYLMWmR4VcyCVjpG9vjjrrb+sFt5MN6fNEw14nVulG9EBAQEBAQEBAQEGLk8rjcVYy3+TuorKygGqa5ne2ONo9rnEBZVrNp0iNZeKG316u9v46V9ptGwOYlbwOQuS6C2BH2GU82Qe/R8qtsHaLTxvOjCcik9zeofqzn9bJM0/HW7/wD18a0WoHsEjf41Pe9WeLt+Gnhr9PFhN5V3cXNxczOnuZXzTPNXyyOL3OPeXGpK3YiI5MWy2rufLbYztrmsVJ5d3aurpNdEjDwdG8ClWuHA/lWtu9pTcY5x3j4Z/TVniyTS3VDtTYe98RvLb0GYxztJd4Lu2Jq+CYAF0bvnqD2jivk/cNhfa5Zx3+qfOPN0eDNGSusJEtFKICAgINTurc+J2xgrrNZWXy7S1bXSKa5Hng2NgNKuceA/ItnabS+4yRjpHxT+mrDLkileqXFe/d8Zbee4p8xkHaWmrLO2Bq2CAElkbe/nxPaeK+sdu2FNrijHX658583OZ805Layj8UssUjZInujkYase0lrge8ELemESfba69dV9v6G2ufnurdnD4e/pdsI+zWbU9o/RcFqZNhhvzr7uD2LSufY/rBx9w+K03njPgnO4OydhqkhHLi+B2qRo79LnH2Ksz9omONJ19ks4yeboHBbgwmfxseTwt7DkLCX6FxA4PbUc2mn0XDtaeIVRfHak6WjSUkSz1g9EBAQEBAQRjqH1D29sTb0uYzEveyzs2EebcS0qI4wf2ncgFPt9vbLbpq8mdHEPUnqtuzf+TN1l5/LsYifgsXCSLeEd4afpP73u4n2Dguo221phjSvPzQTbVDVsvBAQEEv6Y9RsnsbcLL+DVNj56R5KxrQSxV5ivAPZWrT8nIlVnde2U3eLpnhaPlnyn9k+Kfb7icVtfDxdn4TNYzN4q2yuMnbcWN2wSQyt7QeYI7HNPAg8jwXynPgvivNLxparoqXi0axyZyhZCAg8L6+tLCznvbyVsFpbMdLPM80axjBVzifYAs8eO17RWsa2nk8tMRGsuOusPVK73znaQF0WBsXObjbc8C6vAzSD7b6cPsjh31+pdk7RXaY+PHJb5p/VH6cXP7vczlt+GFfq6aogICCTbD6i7q2PlhkcDduh1EfFWj6ut52t+rLHWh5mh+kOwhQZ9vTLGloexOjtnpV1Z291Ewpu7D/S5K3oMji3uDpIXHk4Hhrjd9V1PfQrmN1tLYbaTy8JTVtqnC1WQgICAgwc7m8bgsPeZjJyiCwsYnTXEh7GtHIDtJ5AdpWWOk3tFY5y8mXAnVDqNlt/bquMzekx2wJjx1lUlkEAPhaOzU7m89p9lAuu2u3jFTpj60Fp1RFbDwQEBAQEFodEerUuzcr92ZORztt37x5w5/DymgE7R9nseB2ceYoee792aN1Trp/Vr9seX7G7s916c6T8suuopYpYmSxPbJFI0OjkaQ5rmuFQQRwIIXzKYmJ0nmvol9LwCQBU8kHLPXzq/wD1DeP2zgp64O1f/q7mJx03UzewEc4ozy7HHj2BfRf8d7L6FfWyR/MnlH8Mftn7PepN9uuuemvy/epldUrxAQEBAQb/AGPvXN7M3JaZ7ESlk9u4CaGtGTQkjXDIO1rx8x4jiAos+GuSs1sROjv3Ze78Tu/bVjuDFP1Wt4zUYyRrikHCSJ9PrMdwPz8lyObDOO01nwbETq3aieiAgIOQ/VF1b+/cz/RuHn1YfFSVyUrCNNxeN4aKjmyDl7X17mldF2vadFeu3zTy+j/lDe3goRWzAQEBAQEBAQX56eur3wskGzM7N/pZDow108/Qe4/7d5P1XE+DuPh5EU4z/Jey9UTuMccf3o/X+33rTYbrT4LfU6QXBrdRHqD6v/d8Mu0MBPS/lbTLXkTuMMbucDSPruH0u4cOZ4dj/jfZeuYz5Y+GPljz9v0eSs3260+CvPxc1LvlOICAgICAgILg9OXVx2zNyjD5SbTtrMSNZOXnw29wfDHOOwNPBsnsofqqu7jtPVr1R80MqW0drggio5LmE4gIKj9RXVpuytsHF42bTuTMMcy10kaoID4X3B7jzbH+dx+qrHt209W+s/LDC9tHEhJJJJqTxJK6dCICAgICAgICACQQQaEcQQgu/GepTK2vT2TGSsdLuqENt7PIuAcwwkf96SvOVgFPzjQntXI5f8WpbddccMM8Zr7fKPZKyr3CYx6fvKTnmmnmknme6WaVxfLI8lznOcauc4niSSutrWIjSOUK2Z1fC9BAQEBAQEBAQdgemDq4dw4X+kcxPqzWJjHwMrz4rizbwA483w8j3toewlc53PadFuuvyz96Wll7qqSP/9k='
        },
    )
    const messageRef = useRef('')
    const messagesEndRef = useRef(null)
    const sendMessageWriter = (selectedUser) => {
        const Message = {
            user: selectedUser.userName,
            title: messageRef.current.value,
            writer: true,
        }
        if (messageRef.current.value !== '') {
            sendMessage(Message)
        }
        console.log(Message)
    }

    const [searchValue, setSearchValue] = useState("")
    const search = (e) => {
        console.log(e)
        const name = e.target.value
        setSearchValue(name)
    }

    const [messageReffer,setMessageReffer] =useState(messageRef)
    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        const inputTer = document.getElementById('input')
        inputTer.value = ''
    },[chat.length])


//-------------------------------------------------------------------------------------
    // Drower
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{width: '235px',}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/*<Button sx={{float:'right'}} variant={'contained'}><TiDeleteOutline/></Button>*/}
            <Box sx={{
                padding: '16px',
                borderRight: '1px solid #E0E0E0',
            }}>
                <FormControl sx={{width: '100%',}}>
                    <Input sx={{
                        border: '1px solid #E0E0E0',
                        padding: '5px',
                        borderRadius: '5px',
                        '&:hover': {borderColor: 'black',},
                        '&::before,&::after': {display: 'none'}
                    }}
                           placeholder={'Search contact'} onChange={(e) => search(e)}/>
                </FormControl>
            </Box>
            <Divider/>
            <List sx={{padding: 1, overflow: 'auto'}}>
                {users.map((item) => (
                    item.userName.toLocaleLowerCase().includes(searchValue) &&

                    <Box sx={{paddingY: '7px'}}>
                        <ListItem button key={item.userName} onClick={() => setSelectedUser(item)}>
                            <ListItemAvatar>
                                <Avatar style={{width: '40px', height: '40px', borderRadius: '50%'}} src={item.avatarUrl}
                                     alt="Profile Picture"/>
                            </ListItemAvatar>
                            <Box sx={{flex: 1}}>
                                <Typography sx={{fontSize: '16px'}}>{item.userName}</Typography>
                                <Typography sx={{fontSize: '14px', color: '#777E89'}}>{item.job}</Typography>
                            </Box>
                        </ListItem>
                    </Box>
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{padding: ' 16px ',}}>

            <Box sx={{padding: ' 0 15px 15px'}}>
                <Typography sx={{fontSize: '18px', color: '#777E89'}} component={'h2'}
                            variant={'h5'}>Messenger</Typography>
                <Typography sx={{marginBottom: '20px', fontSize: '30px', fontWeight: 'bold'}} component={'h1'}
                            variant={'h3'}>Chat app</Typography>
            </Box>

            <Box sx={{
                width: '100%',
                maxWidth: '1920px',
                borderRadius: '20px',
                maxHeight: '460px',
                overflow: 'hidden',
                boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
                backgroundColor: 'white',
            }}>
                <Box sx={{display: 'flex', borderBottom: '1px solid #E0E0E0',}}>
                    <Box sx={{
                        width: '208px !important',
                        padding: '16px',
                        borderRight: '1px solid #E0E0E0',
                        display: {lg: 'inline-block', md: 'none', sm: 'none', xs: 'none'}
                    }}>
                        <FormControl sx={{width: '100%',}}>
                            <Input sx={{
                                border: '1px solid #E0E0E0',
                                padding: '5px',
                                borderRadius: '5px',
                                width: '207px',
                                '&:hover': {borderColor: 'black',},
                                '&::before,&::after': {display: 'none'}
                            }}
                                   placeholder={'Search contact'} onChange={(e) => search(e)}/>
                        </FormControl>
                    </Box>
                    <Box sx={{
                        flex: 1
                    }}>
                        <List sx={{overflow: 'auto', paddingX: '10px'}}>
                            <ListItem sx={{transform:'translateY(7px)'}}>
                                <div>
                                    {['left'].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                            <IconButton
                                                sx={{display: {lg: 'none', md: 'inline', sm: 'inline', xs: 'inline'}}}
                                                onClick={toggleDrawer(anchor, true)}><FiMenu/></IconButton>
                                            <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                            >
                                                {list(anchor)}
                                            </Drawer>
                                        </React.Fragment>
                                    ))}
                                </div>
                                <ListItemAvatar>
                                    <Avatar style={{width: '40px', height: '40px', borderRadius: '50%'}}
                                         src={selectedUser.avatarUrl} alt="Profile Picture"/>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography sx={{fontWeight: 'bold'}}>{selectedUser.userName}</Typography>
                                    {
                                        selectedUser.online ? <Typography
                                                sx={{fontSize: '12px', color: '777E89 !important'}}>online </Typography> :
                                            <Typography sx={{
                                                fontSize: '12px',
                                                color: '777E89 !important'
                                            }}>offline </Typography>
                                    }
                                </ListItemText>
                            </ListItem>
                        </List>

                    </Box>

                </Box>
                <Box sx={{display: 'flex',}}>
                    <Box sx={{
                        paddingLeft: '16px',
                    }}>
                        <List sx={{
                            padding: 1,
                            display: {lg: 'inline-block', md: 'none', sm: 'none', xs: 'none'},
                            width: '208px !important',
                            height: '365px',
                            overflow: 'auto',
                            borderRight: '1px solid #E0E0E0',
                            "&::-webkit-scrollbar": {
                                width: "8px",
                            },
                            "&::-webkit-scrollbar:hover": {
                                width: "8px",
                            },
                            "&::-webkit-scrollbar-track ": {
                                boxShadow: "inset 0 0 5px #979797",
                                borderRadius: " 10px",
                            },
                            "&::-webkit-scrollbar-track:hover": {
                                backgroundColor: " #fff",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "grey",
                                borderRadius: "10px",
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                backgroundColor: "#979797",
                            },
                        }}>
                            {users.map((item) => (
                                item.userName.toLocaleLowerCase().includes(searchValue) &&

                                <Box key={item.userName} sx={{paddingY: '7px'}}>
                                    <ListItem button sx={{borderRadius:'7px'}} onClick={() => setSelectedUser(item)}>
                                        <ListItemAvatar>
                                            <Avatar style={{width: '40px', height: '40px', borderRadius: '50%'}}
                                                 src={item.avatarUrl} alt="Profile Picture"/>
                                        </ListItemAvatar>
                                        <Box sx={{flex: 1}}>
                                            <Typography sx={{fontSize: '16px'}}>{item.userName}</Typography>
                                            <Typography
                                                sx={{fontSize: '14px', color: '#777E89'}}>{item.job}</Typography>
                                        </Box>
                                    </ListItem>
                                </Box>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{flex: 1, alignItems: 'end', height: '378px',}}>
                        <Box sx={{height: '80%', overflow: 'auto',"&::-webkit-scrollbar": {
                                width: "8px",
                            },
                            "&::-webkit-scrollbar:hover": {
                                width: "8px",
                            },
                            "&::-webkit-scrollbar-track ": {
                                boxShadow: "inset 0 0 5px #979797",
                                borderRadius: " 10px",
                            },
                            "&::-webkit-scrollbar-track:hover": {
                                backgroundColor: " #fff",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "grey",
                                borderRadius: "10px",
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                backgroundColor: "#979797",
                            },}}>
                            {chat.map(message => (
                                message.user === selectedUser.userName && (
                                    (message.writer) ? <Box id="writer" ref={messagesEndRef}
                                            sx={{display: 'flex', justifyContent: 'end', marginRight: '10px', gap: '10px'}}><Typography
                                            sx={{
                                                padding: 2,
                                                marginBottom: '14px',
                                                display: 'flex',
                                                justifyContent: 'end',
                                                backgroundColor: 'blur.main',
                                                borderRadius: '7px'
                                            }}>{message.title}</Typography><Avatar
                                            src={'data:image/jpeg;base64,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'}/></Box> :
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'start',
                                            paddingY: 1,
                                            paddingX: 2,
                                            gap: '10px'
                                        }}> <Avatar style={{width: '40px', height: '40px', borderRadius: '50%'}}
                                                 src={selectedUser.avatarUrl} alt="Profile Picture"/>
                                            <Typography sx={{
                                            padding: 2,
                                            textAlign: 'start',
                                            backgroundColor: 'blur.main',
                                            borderRadius: '7px'
                                        }}>{message.title}</Typography></Box>
                                )
                            ))}
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            borderTop: '1px solid #E0E0E0',
                            width: '100%'
                        }}>
                            <FormControl sx={{padding: '16px', paddingRight: '0', width: 'calc(100% - 40px)'}}>
                                <Input sx={{
                                    border: '1px solid #E0E0E0',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    '&:hover': {borderColor: 'black',},
                                    '&::before,&::after': {display: 'none'}
                                }}
                                       id={'input'}
                                       placeholder="Type a Message"   inputRef={messageRef}/>
                            </FormControl>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <IconButton onClick={() => sendMessageWriter(selectedUser)}><FiSend/></IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Chat;

