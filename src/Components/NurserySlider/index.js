
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./index.css"

const nurseryData=[
    {id:"1",
    img:"https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"2",
    img:"https://s3-alpha-sig.figma.com/img/8fde/bc3a/bbfa90988173614195fa81d43aa2bb63?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uq~cUZjJwUIMTCxGd2BO4UljQ5vb0cOXS8S80aR5GmRRuItolrte6b~eDUQYaDoU6HNTvPLfoMYduHyiOOtcXAFVYdxyHY8LFwdz~1kwdSEuf2qwypbUGVmZbmuk0X9yhzsDIl-tIE8e3t5kkrG2JmRw8GxEK-jurl1HOIdWkGgTgcz468aaSR5mtjrQSzw0szcP18IJsRUl3TuiOTbwgTrn5nb-idemfwo0UIJChxVmedjaNMCqr1NNYkEgA98HLGwwWZb78ymzThMEdpDQzfPlEH0HyyTag-m8vps4E277jSNm7xdnDcL-eSjfc6bn4jiM5nCu6tECNG3ufir90A__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"3",
    img:"https://s3-alpha-sig.figma.com/img/279e/3d50/4fa5aaae113083a0db504c05b0632860?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0EGVWoDEQUwjx~hnB0USRsU7reHwOw6193w9u8swslxPzKI2ddB68xXahlNiWBgb6QR1DKlu2tCi9~c0~2ZjR0uWly5Vcx7~JK4ey05Oo-h7lhION9Fh4j7HB0P53BMtKvM9RrM0~-7HC~5J~MLQqaXfWRrwt1Uc15Q9WhsKhnLCBp7FO60nEePDTwtWZaVrVOv4TBhl~y25LIPF1aiqzO~GeiwsGJMJprtqx9084RytbMRxZPLTBrUSLXU7AC5zSjCM~2eivRKOiquEQBUkT2Dm59cKGZm6LHfdtKW9XFzM1ZjO4rVPawK~iu8yAGplOZ5YujxmRiWzdzGsm4yJA__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"4",
    img:"https://s3-alpha-sig.figma.com/img/30e4/bd2a/6b210bc07ae9706bbb2921a7a22ae2d8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDqrVNFwt4JzcyAYDai8WBIsJ8~x8SSddecc5JzGY6MlDBnAToPpk~pl0iTDOXAdRPXQuRsfHeH-EiH5nOdJBd1MrCIpn7o7dpjQ4As8uPg-6kZtK24SLABA1dixPDhyaDd0J~Ah6cGGTSVYqcJBYQnaQ-xaEDYUoxlFDyUgJEW~D8nlhECKXx8yblqiSb6GeyBb9dMTzTP4coxAJnM~CakmgtT8dBv40VRxY4Jm4IqxYyP4oZYrd3-86kB1uLIPZ0gNNOAe9CjoHf8PM~cqDv-HleBmGdNyzuXGTbHlCjf5sHI3HZVac~0mOWokX3zT8CTDV1AkM7cHe~n4JUVKhw__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"5",
    img:"https://s3-alpha-sig.figma.com/img/84ed/e8e9/935a62fb31df9354ded9299559307ae6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkUcvN372cksGIWPwvW5owktp9ytkBrXYwKGswGcGcKTz1P5vCJ1AwDg6XEfLcuYGcNx3T1xbxpj2h0vVt2Jx~J8CqBxk5HOJ8WQGo9GtH-JwoEbw4G2si9EZQgMu95KzZzjsFsbph4Xeq5w6POOx4eZvkuWwjZmTCujut12EViAzhpxyYT8qSiL~eM0VMPp53TxbY47bk1EYpFVi2f~sc8BuMIJ9pnlkysxhWaYblRHulmELZCJcaUDO1QVDUYR6BdzNpmAmCw9xLufhKnsqamAgmGkfC0XfTfN3mxoWd6fZJKhiubj5FVj70lJp1uSwL4zggWiChoZOHe2doVWEA__",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"6",
    img:"https://s3-alpha-sig.figma.com/img/c0ec/e88d/1218900e6bd6cc6f3d5a104c0dbb8212?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwOdq7lIphjriAYrtpA-wCNACJZQOVmzwfpVmFho~vrcylQhOmPtsN8OXniTb7xqVeIWxCh1Gf0c0Mc6Fb5QePY02V3GoHGuSQEF2uc9443BVOlD3zNAW6f2hG3Ez0tyMai~eioWsjF9jXgnUfKTppFztwiblMTol2j1X9YojnliUt4fVSyoMQloQFHVgcS-W3YCeTRlQb~eF5U7ftU~WRqSBAw8PTlBk3ZL3AdSgrmM9g9D-zcpbbSzXvKt31sRbspjrTuwizjJjMHvOeOdRbvtDDhiQeo41kXUsVTvzOMX431ItCDie4VTBu3yaPiFpoh0FmLYfyE9tw9bYA4OtQ__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"7",
    img:"https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"8",
    img:"https://s3-alpha-sig.figma.com/img/18ca/98ef/7f83ab9fd1481e530fd7e03257a1bb07?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erDGloJ54aO~tQLVnk6mFUTpCOi05se3amA3zWA2-RjxzBPwDveQ3iUcUvf8xVOHFYQvflhm91zj7kaIHbsgrpThtzu5Dh3JRhZwvJHKO7fRGqUa5wEQUpDVhd5y-oueSXpnOZIpI1IbRifjQ8f2tlT9fxk514i7BHacGloffymzskxSIKUkKPz1dvafN-ko30hOsnIRTkG5HRH9JLa28c6MdQ54mOFvYebATztRbkrhsIPRtFu45mq28f4wgVpX5k2z2ZgXFiz7JtNgAZxlsRIL8XcgVlk6X1p7XMmW95DFj2d8bUe1TIZcgsuwDc-yRE0eMX8mGgk2ENqIm~Xvig__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"9",
    img:"https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },
    {id:"9",
    img:"https://s3-alpha-sig.figma.com/img/2270/0766/ed50532940537d9d39d2626bb7a95167?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1u59mBoYOHSu1vnubFHYBlgxelj9I23c0h6FVJu8fe99v6vjeEdd6UOgf5HTHto7xa-16CN1hOLofpqppNDJz2Oxg1tf484NGDPRM6lKLxCAZ94vesYIDXG~EjlY0mXxC0qLyFyzX4~ntpqmYvlbRUFu32C4Pr3e9DHL6To3K2q54-FoFL4hobrTij7oIpGHfxKj4eMB6q2xHjXlvJZkXmQ3Tk7snP0197a8V3CO1XvygFiFYLckqUOzhSQ0JP~4BzrS~rcb84Rbtx8Zc77A4AHVH6ZU-wr9omI~Uc8jTCmEU~A6x~78h0RCTr~cd1EsqQnDTuc-v-d7Cql-7Ytdg__",
    description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
    },


]

function NurserySlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
    return (
    
        <div classname="nursery_slider_main_container">
        <div classname="nursery_items">
        <Slider {...settings}>
            {nurseryData.map((eachitem)=>(
                <div className="card">
                    <img className="img" src={eachitem.img} alt={eachitem.description}/>
                    <p className="para">{eachitem.description}</p>
                </div>
            ))}
        </Slider>
        </div>
        </div>

    
    )

}
export default NurserySlider