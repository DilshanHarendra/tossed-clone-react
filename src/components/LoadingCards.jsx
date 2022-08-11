import React from 'react';
import ContentLoader from 'react-content-loader';


function LoadingCards({type}){
    switch (type){
    case 1:
        return( <ContentLoader
            backgroundColor={'#dadada'}
            foregroundColor={'#999'}
            width={500}
            height={300}
        >
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="0" ry="5" width="250" height="200" />
            <rect x="0" y="220" rx="4" ry="4" width="150" height="13" />
            <rect x="0" y="250" rx="3" ry="3" width="150" height="20" />
            <rect x="0" y="280" rx="3" ry="3" width="50" height="10" />
        </ContentLoader>);
    case 2:
        return( <ContentLoader
            backgroundColor={'#dadada'}
            foregroundColor={'#999'}
            width={400}
            height={200}
        >
            {/* Only SVG shapes */}
            <rect x="300" y="0" rx="0" ry="5" width="100" height="100" />
            <rect x="0" y="10" rx="4" ry="4" width="250" height="13" />
            <rect x="0" y="35" rx="3" ry="3" width="150" height="10" />
            <rect x="0" y="60" rx="3" ry="3" width="50" height="10" />
        </ContentLoader>);
    case 3:
        return(
            <div   className="p-2 mt-4">
                <ContentLoader
                    backgroundColor={'#dadada'}
                    foregroundColor={'#999'}
                    width={600}
                    height={100}
                >
                    {/* Only SVG shapes */}
                    <rect x="0" y="35" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="60" rx="3" ry="3" width="600" height="10" />
                </ContentLoader>
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-3">

                    {
                        [0,1,2,3].map((item)=>
                            <ContentLoader
                                backgroundColor={'#dadada'}
                                foregroundColor={'#999'}
                                width={400}
                                height={200}
                                key={item}
                            >
                                {/* Only SVG shapes */}
                                <rect x="300" y="0" rx="0" ry="5" width="100" height="100" />
                                <rect x="0" y="10" rx="4" ry="4" width="250" height="13" />
                                <rect x="0" y="35" rx="3" ry="3" width="150" height="10" />
                                <rect x="0" y="60" rx="3" ry="3" width="50" height="10" />
                            </ContentLoader>
                        )
                    }
                </div>

            </div>


        );
    }
}export default LoadingCards;
