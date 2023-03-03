import React from 'react';
import { Helmet } from 'react-helmet';


export default function SEO({title, description, name, keywords}) {
return (
<Helmet>
<title>{title}</title>
<meta name='description' content={description} />
<meta name='title' content={title} />
<meta name='name' content={name} />
<meta name='keywords' content={keywords} />
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
</Helmet>
)
}