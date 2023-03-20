import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height:500 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
      
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            style={{objectFit:'contain',width:"100%"}}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    title: 'person typing on a laptop',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
    title: 'doctor standing with crossed arms',
  },
  {
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28',
    title: 'x_ray image of a hand',
  },
  {
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c',
    title: 'stethoscope',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634',
    title: 'Doctor consulting with patient',
  },
  {
    img: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34',
    title: 'doctor is giving an injection to a patient on shoulder',

  },
  
  {
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    title: 'Doctor using phone',
    cols:2,
    rows:2
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1674575271974-cd8c44659cd3",
    title: "doctor is explaing reports to a paient",
    cols:2

  },
]
