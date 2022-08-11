export const  sideBarAnimation={
    init:{
        width:0
    },
    animate:{
        width:'350px',
        transition:{delay:0.05}
    },
    exit:{
        width:0,
        opacity:0,

    }
};

export const  modelAnimation={
    init:{
        opacity:0,
        scale: 0,
    },
    animate:{
        opacity: 1,
        scale: 1,
        transition:{delay:0.2}
    },
    exit:{
        y: '100vh',
    }
};

export const dropDownAnimation={
    init:{
        opacity:0,
    },
    animate:{
        opacity:100,
    },
    exit:{
        opacity:0,

    }
};
