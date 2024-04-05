import { Box } from "@chakra-ui/react";
import { onClickNav } from "../../../@dashboardComponents/onClickNav";

const ImgSvgHeader = [

    {
        imageComponent: () => (
            <Box className="img-components-home" >
                <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6667 0.333374H5.33337C2.57671 0.333374 0.333374 2.57671 0.333374 5.33337V10.0517C0.333374 11.8067 0.970041 13.4017 2.00004 14.6284V30.3334C2.00004 30.7754 2.17564 31.1993 2.4882 31.5119C2.80076 31.8244 3.22468 32 3.66671 32H17C17.4421 32 17.866 31.8244 18.1786 31.5119C18.4911 31.1993 18.6667 30.7754 18.6667 30.3334V22H25.3334V30.3334C25.3334 30.7754 25.509 31.1993 25.8215 31.5119C26.1341 31.8244 26.558 32 27 32H30.3334C30.7754 32 31.1993 31.8244 31.5119 31.5119C31.8244 31.1993 32 30.7754 32 30.3334V14.6267C33.03 13.4017 33.6667 11.8067 33.6667 10.05V5.33337C33.6667 2.57671 31.4234 0.333374 28.6667 0.333374ZM30.3334 5.33337V10.0517C30.3334 11.9517 28.9184 13.5717 27.1817 13.6634L27 13.6667C25.1617 13.6667 23.6667 12.1717 23.6667 10.3334V3.66671H28.6667C29.5867 3.66671 30.3334 4.41504 30.3334 5.33337ZM13.6667 10.3334V3.66671H20.3334V10.3334C20.3334 12.1717 18.8384 13.6667 17 13.6667C15.1617 13.6667 13.6667 12.1717 13.6667 10.3334ZM3.66671 5.33337C3.66671 4.41504 4.41337 3.66671 5.33337 3.66671H10.3334V10.3334C10.3334 12.1717 8.83837 13.6667 7.00004 13.6667L6.81837 13.6617C5.08171 13.5717 3.66671 11.9517 3.66671 10.0517V5.33337ZM13.6667 23.6667H7.00004V18.6667H13.6667V23.6667Z" fill="url(#paint0_linear_443_687)" />
                    <defs>
                        <linearGradient id="paint0_linear_443_687" x1="17" y1="0.333374" x2="17" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EA9769" />
                            <stop offset="1" stop-color="#EA6969" />
                        </linearGradient>
                    </defs>
                </svg>
            </Box>
        )
    },
    {

        imageComponent: ({ navigate }) => (
            <Box className="img-home" onClick={() => { onClickNav({ path: '/', navigate }) }} >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.73037 0.788355C9.00037 -0.220645 10.7804 -0.260645 12.0894 0.668355L12.2504 0.788355L18.3394 5.65935C19.0094 6.17835 19.4204 6.94936 19.4904 7.78835L19.5004 7.98935V16.0984C19.5004 18.1884 17.8494 19.8884 15.7804 19.9984H13.7904C12.8394 19.9794 12.0704 19.2394 12.0004 18.3094L11.9904 18.1684V15.3094C11.9904 14.9984 11.7594 14.7394 11.4504 14.6884L11.3604 14.6784H8.68937C8.37037 14.6884 8.11037 14.9184 8.07037 15.2184L8.06037 15.3094V18.1594C8.06037 18.2184 8.04937 18.2884 8.04037 18.3384L8.03037 18.3594L8.01937 18.4284C7.90037 19.2794 7.20037 19.9284 6.33037 19.9894L6.20037 19.9984H4.41037C2.32037 19.9984 0.610366 18.3594 0.500366 16.2984V7.98935C0.509366 7.13835 0.880366 6.34835 1.50037 5.79835L7.73037 0.788355ZM11.3804 1.87835C10.6204 1.26835 9.54037 1.23935 8.74037 1.76835L8.58937 1.87835L2.50937 6.77936C2.16037 7.03835 1.95037 7.42836 1.90037 7.83836L1.88937 7.99835V16.0984C1.88937 17.4284 2.92937 18.5184 4.25037 18.5984H6.20037C6.42037 18.5984 6.61037 18.4494 6.63937 18.2394L6.66037 18.0594L6.67037 18.0084V15.3094C6.67037 14.2394 7.49037 13.3694 8.54037 13.2884H11.3604C12.4294 13.2884 13.2994 14.1094 13.3804 15.1594V18.1684C13.3804 18.3784 13.5304 18.5594 13.7304 18.5984H15.5894C16.9294 18.5984 18.0194 17.5694 18.0994 16.2584L18.1104 16.0984V7.99835C18.0994 7.56936 17.9204 7.16835 17.6104 6.86935L17.4804 6.75835L11.3804 1.87835Z" fill="white" />
                </svg>
            </Box>
        )

    },
    {
        imageComponent: ({ navigate }) => (
            <Box className="img-components" onClick={() => { onClickNav({ path: '/promo', navigate }) }}>
                <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9511 0.716446L12.1334 0.886452L12.8522 1.6052C13.0991 1.85092 13.4229 2.00242 13.7674 2.03646L13.9161 2.04378H14.9441C16.5479 2.04378 17.8594 3.29795 17.951 4.87883L17.9561 5.05578V6.08278C17.9561 6.43258 18.0767 6.76886 18.2943 7.03624L18.3934 7.14645L19.1122 7.86525C20.2437 8.99165 20.2943 10.7929 19.2577 11.98L19.1224 12.1251L18.3941 12.8535C18.1491 13.099 17.9975 13.4231 17.9634 13.7672L17.9561 13.9158V14.9448C17.9561 16.5485 16.702 17.8591 15.1211 17.9507L14.9441 17.9558H13.9161C13.5676 17.9558 13.2309 18.0769 12.9633 18.2951L12.8531 18.3945L12.1352 19.1113C11.01 20.2442 9.20745 20.2944 8.01992 19.2574L7.86577 19.1131L7.14866 18.396C6.90027 18.1494 6.57583 17.9973 6.23232 17.9631L6.0841 17.9558H5.0551C3.45197 17.9558 2.14083 16.7023 2.04922 15.1217L2.0441 14.9448V13.9158C2.0441 13.5678 1.92281 13.2308 1.70472 12.9637L1.60541 12.8537L0.888277 12.1356C-0.244298 11.0094 -0.294536 9.20679 0.742484 8.02044L0.877774 7.87545L1.60389 7.14834C1.85084 6.89963 2.00267 6.57581 2.03676 6.23146L2.0441 6.08278V5.05578L2.04922 4.87885C2.13744 3.35668 3.3566 2.13715 4.87824 2.0489L5.0551 2.04378H6.0841C6.43259 2.04378 6.76936 1.9229 7.0364 1.70572L7.14641 1.60682L7.86457 0.887655C8.99094 -0.243823 10.7934 -0.293637 11.9511 0.716446ZM9.04152 1.84256L8.9268 1.94674L8.20555 2.66899C7.6883 3.18258 7.00418 3.48966 6.28193 3.53727L6.0841 3.54378H5.0551C4.26754 3.54378 3.61982 4.14793 3.55028 4.91821L3.5441 5.05578V6.08278C3.5441 6.81195 3.2795 7.5131 2.80221 8.06116L2.6668 8.20674L1.93963 8.93491C1.38782 9.48923 1.35569 10.3649 1.84334 10.9589L1.9478 11.0738L2.66706 11.7941C3.18147 12.3097 3.48976 12.995 3.53756 13.7178L3.5441 13.9158V14.9448C3.5441 15.7328 4.14781 16.3801 4.91762 16.4496L5.0551 16.4558H6.0841C6.81189 16.4558 7.51365 16.7207 8.06183 17.198L8.20743 17.3335L8.93075 18.0568C9.48896 18.6119 10.3649 18.6442 10.9584 18.1565L11.0731 18.0521L11.794 17.3322C12.3107 16.8179 12.9952 16.5101 13.7181 16.4623L13.9161 16.4558H14.9441C15.7328 16.4558 16.3804 15.8524 16.4499 15.0823L16.4561 14.9448V13.9158C16.4561 13.1869 16.7209 12.4839 17.1976 11.9383L17.3328 11.7935L18.0603 11.066C18.6121 10.511 18.644 9.63577 18.1571 9.04195L18.0528 8.92711L17.3309 8.20523C16.817 7.68765 16.5102 7.00422 16.4626 6.28094L16.4561 6.08278V5.05578C16.4561 4.26737 15.852 3.61951 15.0817 3.54996L14.9441 3.54378H13.9161C13.1869 3.54378 12.4849 3.27939 11.938 2.80243L11.7928 2.66711L11.1048 1.97734L11.065 1.94031C10.5107 1.38855 9.63484 1.35624 9.04152 1.84256ZM13.0965 12.0424C13.1665 12.1124 13.2265 12.1924 13.2665 12.2824C13.2965 12.3724 13.3165 12.4724 13.3165 12.5724C13.3165 12.6734 13.2965 12.7624 13.2665 12.8524C13.2265 12.9424 13.1665 13.0324 13.0965 13.1024C12.9565 13.2424 12.7665 13.3224 12.5665 13.3224C12.3665 13.3224 12.1765 13.2424 12.0365 13.1024C11.9665 13.0324 11.9165 12.9424 11.8765 12.8524C11.8365 12.7624 11.8165 12.6734 11.8165 12.5724C11.8165 12.4724 11.8365 12.3724 11.8765 12.2824C11.9165 12.1924 11.9665 12.1124 12.0365 12.0424C12.3165 11.7624 12.8165 11.7624 13.0965 12.0424ZM13.1001 6.89915C13.3664 7.16542 13.3906 7.58208 13.1728 7.87569L13.1001 7.95981L7.96013 13.0998C7.66724 13.3927 7.19237 13.3927 6.89947 13.0998C6.63321 12.8335 6.609 12.4169 6.82686 12.1233L6.89947 12.0392L12.0395 6.89915C12.3324 6.60626 12.8072 6.60626 13.1001 6.89915ZM7.9564 6.90278C8.09641 7.04178 8.1764 7.23278 8.1764 7.43278C8.1764 7.53278 8.1664 7.62178 8.1264 7.71278C8.0864 7.80278 8.0264 7.88278 7.9564 7.96278C7.8864 8.03278 7.8064 8.08178 7.7164 8.12178C7.6264 8.16178 7.5264 8.18278 7.4264 8.18278C7.3264 8.18278 7.2364 8.16178 7.1464 8.12178C7.0564 8.08178 6.9664 8.03278 6.8964 7.96278C6.8264 7.88278 6.7764 7.80278 6.7364 7.71278C6.6964 7.62178 6.6764 7.53278 6.6764 7.43278C6.6764 7.33178 6.6964 7.23278 6.7364 7.14278C6.7764 7.05278 6.8264 6.96278 6.8964 6.90278C7.1864 6.62178 7.6764 6.62178 7.9564 6.90278Z" fill="#EA7C69" />
                </svg>
            </Box>
        )

    }
    , {

        imageComponent: ({ navigate }) => (
            <Box className="img-components" onClick={() => { onClickNav({ path: '/dashboard', navigate }) }}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z" fill="#EA7C69" />
                </svg>
            </Box>
        )

    }, {

        imageComponent: () => (
            <Box className="img-components">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3212 2.75806C17.8351 2.77511 19.2761 3.41599 20.3085 4.5315C21.3408 5.64701 21.8745 7.13976 21.7865 8.61703L21.7852 14.854C21.8745 16.3763 21.3408 17.8691 20.3085 18.9846C19.2761 20.1001 17.8351 20.741 16.3127 20.7581H7.25208C4.08255 20.7581 1.7959 18.1965 1.7959 14.8991V8.61703C1.7959 5.31957 4.08255 2.75806 7.25208 2.75806H16.3212ZM16.3043 4.28644H7.25208C4.95869 4.28644 3.31334 6.12961 3.31334 8.61703V14.8991C3.31334 17.3865 4.95869 19.2297 7.25208 19.2297H16.3043C17.4032 19.2173 18.4491 18.7521 19.1985 17.9424C19.9479 17.1327 20.3352 16.0492 20.2691 14.8991L20.2704 8.57194C20.3352 7.46693 19.9479 6.38339 19.1985 5.57368C18.4491 4.76397 17.4032 4.29878 16.3043 4.28644ZM17.8199 8.39642C18.058 8.69598 18.0359 9.12067 17.7841 9.39357L17.7017 9.47061L13.5947 12.7817C12.5972 13.5648 11.219 13.6039 10.1789 12.8956L10.0176 12.7775L5.88316 9.47259C5.55494 9.21022 5.50002 8.72952 5.76051 8.39891C5.99731 8.09837 6.41326 8.02533 6.73353 8.21166L6.82647 8.27537L10.9557 11.5762C11.4187 11.9396 12.0534 11.9676 12.5367 11.6649L12.6542 11.5823L16.7535 8.27736C17.0806 8.01361 17.5581 8.06692 17.8199 8.39642Z" fill="#EA7C69" />
                </svg>
            </Box>
        )
    }, {
        imageComponent: () => (
            <Box className="img-components">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.608 19.6906C14.9045 19.9321 14.9515 20.3713 14.7129 20.6715C14.5366 20.8935 14.3327 21.0922 14.1167 21.255C13.3891 21.826 12.464 22.0849 11.5453 21.9754C10.6258 21.8659 9.787 21.3962 9.21459 20.6689C8.9774 20.3676 9.02646 19.9286 9.32418 19.6885C9.62189 19.4484 10.0555 19.4981 10.2927 19.7995C10.6379 20.2381 11.1467 20.523 11.7064 20.5896C12.2669 20.6564 12.8307 20.4986 13.2826 20.1443C13.4158 20.0437 13.5355 19.927 13.6389 19.7969C13.8775 19.4967 14.3114 19.4491 14.608 19.6906ZM5.15213 8.99974L5.16444 8.40391C5.17324 8.14906 5.18686 7.91248 5.20685 7.68096C5.50654 4.44456 8.59565 2 11.9648 2H12.0361C15.4034 2 18.4934 4.44285 18.8034 7.68536C18.8212 7.89148 18.8288 8.07458 18.8311 8.33206L18.832 9.11982C18.8327 9.19158 18.8339 9.25469 18.8358 9.31353L18.845 9.50977L18.8896 9.69688C19.0303 10.218 19.2776 10.7052 19.6162 11.1282L19.7669 11.3055L19.8286 11.3847C20.2348 11.9917 20.4668 12.698 20.5 13.4587L20.499 13.862C20.4707 14.763 20.1399 15.6331 19.5338 16.3582C18.7311 17.2101 17.6434 17.7393 16.4873 17.8457C13.502 18.1699 10.49 18.1699 7.51296 17.8466C6.34896 17.7346 5.26444 17.2069 4.42663 16.3223C3.80882 15.5691 3.48041 14.6208 3.5009 13.6624L3.50175 13.4242C3.53744 12.6955 3.76804 11.9898 4.16936 11.3802L4.23653 11.2938C4.70525 10.7799 5.02569 10.151 5.16473 9.47306L5.14969 9.53395L5.15213 8.99974ZM12.0361 3.39535H11.9648C9.26651 3.39535 6.80804 5.34087 6.57967 7.80678C6.56798 7.94228 6.55866 8.08207 6.55137 8.2292L6.53532 8.69559L6.52879 9.61486L6.51441 9.75667C6.32444 10.683 5.88728 11.5409 5.24929 12.2404L5.29856 12.1833L5.21045 12.3291C5.04539 12.6265 4.9389 12.9495 4.89682 13.2682L4.87935 13.4587L4.87919 13.6774C4.86568 14.3142 5.08086 14.9356 5.45369 15.3931C6.02881 15.9985 6.80682 16.377 7.65168 16.4583C10.5393 16.7719 13.4527 16.7719 16.3514 16.4572C17.1871 16.3802 17.9645 16.002 18.5084 15.4267C18.92 14.933 19.1375 14.3097 19.1216 13.6536L19.1224 13.4901C19.1013 13.0186 18.951 12.5613 18.6873 12.1672L18.7026 12.1926L18.5647 12.0309C18.0893 11.4441 17.744 10.7635 17.5517 10.034L17.4868 9.75818L17.4739 9.66551C17.4642 9.53013 17.4585 9.40982 17.4555 9.26514L17.4528 8.3605C17.4509 8.13044 17.4447 7.97558 17.4307 7.81326C17.1944 5.34075 14.7336 3.39535 12.0361 3.39535Z" fill="#EA7C69" />
                </svg>
            </Box>
        )
    }, {
        imageComponent: () => (
            <Box className="img-components">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6161 2C13.3251 1.99971 14.0041 2.28061 14.4983 2.77871C14.9925 3.27681 15.2599 3.94968 15.2383 4.57766L15.2468 4.72535C15.2641 4.87079 15.3124 5.01116 15.3908 5.14054C15.5435 5.39567 15.7935 5.58081 16.0857 5.65514C16.3779 5.72947 16.6882 5.68688 16.9821 5.51839L17.146 5.4355C18.3759 4.86897 19.8511 5.31918 20.5333 6.47928L21.1465 7.52174C21.1627 7.54922 21.1769 7.57762 21.1892 7.60674L21.2461 7.71842C21.7945 8.86519 21.4043 10.2293 20.3624 10.9223L20.1051 11.0807C19.9706 11.1726 19.8585 11.2926 19.7742 11.4368C19.6218 11.6929 19.58 11.998 19.658 12.2844C19.736 12.5708 19.9272 12.8149 20.2174 12.9793L20.3843 13.0841C20.8887 13.4297 21.253 13.9391 21.4119 14.523C21.5912 15.1817 21.495 15.8833 21.1399 16.4804L20.4803 17.557L20.3808 17.7089C19.6058 18.8008 18.1011 19.1344 16.9527 18.485L16.8166 18.4163C16.6746 18.3541 16.5214 18.3199 16.382 18.316C16.0786 18.3146 15.7872 18.432 15.5727 18.6422C15.3582 18.8524 15.2383 19.1379 15.2391 19.4698L15.231 19.6414C15.12 20.9703 13.9845 22 12.6164 22H11.3811C9.93219 22 8.75765 20.8493 8.75912 19.4753L8.75063 19.3277C8.73337 19.1822 8.68504 19.0418 8.6027 18.9057C8.45336 18.65 8.20591 18.4633 7.91538 18.3871C7.62484 18.3109 7.31529 18.3516 7.01565 18.5213L6.83762 18.6084C6.2746 18.8565 5.63953 18.9023 5.04445 18.7366C4.37306 18.5497 3.80539 18.1083 3.47412 17.5224L2.83679 16.4442L2.75197 16.2844C2.17157 15.0841 2.62651 13.6412 3.78115 12.9875L3.88645 12.9228C4.19491 12.7137 4.37987 12.3688 4.37987 12C4.37987 11.599 4.16149 11.2284 3.77948 11.0115L3.62449 10.9141C2.51001 10.1548 2.16949 8.68049 2.85989 7.50696L3.50918 6.46166C4.23128 5.23376 5.83155 4.81017 7.06235 5.50171L7.19559 5.5713C7.33141 5.63238 7.47895 5.6648 7.62101 5.66628C8.24742 5.66634 8.75775 5.17352 8.76724 4.54181L8.77575 4.3478C8.82704 3.74716 9.09307 3.1827 9.52796 2.75457C10.0186 2.27155 10.6855 2 11.3811 2H12.6161ZM12.6164 3.44774H11.3811C11.0786 3.44774 10.7887 3.56581 10.5753 3.77582C10.3863 3.96196 10.2706 4.20741 10.2503 4.43661L10.2368 4.7415C10.1334 6.07087 8.99969 7.11416 7.61326 7.11398C7.25588 7.11034 6.90355 7.03293 6.54427 6.87026L6.3519 6.77085C5.8038 6.46315 5.1049 6.64815 4.78057 7.19925L4.13128 8.24455C3.83377 8.75044 3.98256 9.39466 4.44324 9.70925L4.70395 9.871C5.42196 10.3467 5.85754 11.1429 5.85754 12C5.85754 12.8446 5.43413 13.634 4.70219 14.1296L4.54639 14.2256C4.03354 14.5163 3.83562 15.144 4.07398 15.6383L4.13027 15.7449L4.75952 16.8084C4.90728 17.0696 5.1552 17.2624 5.44842 17.344C5.70831 17.4164 5.98569 17.3964 6.20208 17.3018L6.3108 17.2497C6.91096 16.9066 7.62614 16.8126 8.29737 16.9886C8.96861 17.1645 9.54028 17.5959 9.87937 18.1768C10.0618 18.478 10.1772 18.8132 10.2219 19.1985L10.2421 19.552C10.3043 20.1145 10.7905 20.5523 11.3811 20.5523H12.6164C13.2137 20.5523 13.7099 20.1023 13.7565 19.5511L13.7621 19.4421C13.7588 18.7585 14.0345 18.1019 14.5279 17.6185C15.0212 17.1351 15.6914 16.865 16.4053 16.8686C16.7556 16.8778 17.1004 16.9547 17.4528 17.11L17.7687 17.2682C18.2647 17.4814 18.8529 17.3258 19.1511 16.9067L19.2236 16.7957L19.868 15.7436C20.0203 15.4875 20.0621 15.1824 19.9841 14.896C19.915 14.6422 19.7566 14.4207 19.5645 14.2882L19.2922 14.1195C18.7716 13.7748 18.3932 13.2563 18.2302 12.6574C18.0509 11.9987 18.1471 11.2971 18.4946 10.7126C18.6849 10.3872 18.9464 10.1073 19.2873 9.87532L19.448 9.77613C19.9601 9.4827 20.1578 8.85504 19.9212 8.35884L19.8505 8.22529L19.8378 8.19726L19.253 7.20208C18.9764 6.73175 18.4008 6.52853 17.9125 6.6891L17.8015 6.73265L17.6983 6.78415C17.1001 7.12941 16.3863 7.22736 15.7143 7.05641C15.0423 6.88546 14.4673 6.45965 14.1181 5.87616C13.9357 5.57504 13.8203 5.23984 13.7756 4.85454L13.7624 4.60249C13.7713 4.29923 13.6546 4.00536 13.4387 3.78783C13.2229 3.57029 12.9264 3.44774 12.6164 3.44774ZM12.0032 8.73182C13.8455 8.73182 15.339 10.195 15.339 12C15.339 13.805 13.8455 15.2682 12.0032 15.2682C10.161 15.2682 8.66748 13.805 8.66748 12C8.66748 10.195 10.161 8.73182 12.0032 8.73182ZM12.0032 10.1796C10.977 10.1796 10.1452 10.9946 10.1452 12C10.1452 13.0054 10.977 13.8204 12.0032 13.8204C13.0294 13.8204 13.8613 13.0054 13.8613 12C13.8613 10.9946 13.0294 10.1796 12.0032 10.1796Z" fill="#EA7C69" />
                </svg>
            </Box>
        )
    }, {
        imageComponent: () => (
            <Box className="img-components">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z" fill="#EA7C69" />
                </svg>
            </Box>

        )
    }
]

export default ImgSvgHeader;