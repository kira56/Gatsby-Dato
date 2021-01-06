import Header from './header';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import React from 'react';

const Layout = (props) => {
    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size:62.5%;
                        box-sizing:border-box;
                    }
                    *, *:before,*:after{
                        box-sizing:inherit;
                    }
                    body{
                        font-size:16px;
                        font-size:1.8rem;
                        line-height:1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3{
                        margin:0;
                        line-height:1.5;
                    }
                    h1, h2{
                        font-family: 'Roboto', sans-serif;

                    }
                    h3{
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                    }
                `}
            />
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                <title>Diego Hotel</title>
            </Helmet>
            <Header />
            {props.children}
        </>
    )
}

export default Layout
