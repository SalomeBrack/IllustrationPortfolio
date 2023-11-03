export interface Image {
    title: string;
    description?: string;

    link: string;
    mobile?: string;
    thumb?: string;

    width?: number;
    height?: number;
}

// Größenverhältnis: 50% / 20% (mobile)
// Thumbnail: 400 x 400 px
// https://www.iloveimg.com/compress-image
// https://www.flickr.com/photos/upload/

export const IMAGES: Image[] = [
    {
        title: 'Candy Land',
        description: 'Lorem ipsum dolor sit amet,<br>consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        
        link: 'https://live.staticflickr.com/65535/53191440417_6752b681c4_o.jpg',
        mobile: 'https://live.staticflickr.com/65535/53298000571_d9087a030e_b.jpg',
        thumb: 'https://live.staticflickr.com/65535/53186824569_2510882582_o.jpg',
        
        width: 2963, height: 1929,
    },
    {
        title: 'Placeholder 1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        link: 'https://live.staticflickr.com/65535/53214654037_229cd6d830_h.jpg',
        mobile: 'https://live.staticflickr.com/65535/53214654037_ecd7767847_w.jpg',
    },
    {
        title: 'Placeholder 2',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        link: 'https://live.staticflickr.com/65535/53215921134_276d6b969f_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215921134_276d6b969f_w.jpg',
    },
    {
        title: 'Placeholder 3',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        link: 'https://live.staticflickr.com/65535/53215530631_e91f9b419d_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215530631_e91f9b419d_w.jpg',
    },
    {
        title: 'Placeholder 4',
        link: 'https://live.staticflickr.com/65535/53215921124_a4f8ea42ce_h.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215921124_5a3aa61d60_w.jpg',
    },
    {
        title: 'Placeholder 5',
        link: 'https://live.staticflickr.com/65535/53215840063_7fc536b294_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215840063_7fc536b294_w.jpg',
    },
    {
        title: 'Placeholder 6',
        link: 'https://live.staticflickr.com/65535/53215530646_4cd0dc15d1_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215530646_4cd0dc15d1_w.jpg',
    },
    {
        title: 'Placeholder 7',
        link: 'https://live.staticflickr.com/65535/53214654037_229cd6d830_h.jpg',
        mobile: 'https://live.staticflickr.com/65535/53214654037_ecd7767847_w.jpg',
    },
    {
        title: 'Placeholder 8',
        link: 'https://live.staticflickr.com/65535/53215921134_276d6b969f_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215921134_276d6b969f_w.jpg',
    },
    {
        title: 'Placeholder 9',
        link: 'https://live.staticflickr.com/65535/53215530631_e91f9b419d_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215530631_e91f9b419d_w.jpg',
    },
    {
        title: 'Placeholder 10',
        link: 'https://live.staticflickr.com/65535/53215921124_a4f8ea42ce_h.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215921124_5a3aa61d60_w.jpg',
    },
    {
        title: 'Placeholder 11',
        link: 'https://live.staticflickr.com/65535/53215840063_7fc536b294_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215840063_7fc536b294_w.jpg',
    },
    {
        title: 'Placeholder 12',
        link: 'https://live.staticflickr.com/65535/53215530646_4cd0dc15d1_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215530646_4cd0dc15d1_w.jpg',
    },
    {
        title: 'Placeholder 13',
        link: 'https://live.staticflickr.com/65535/53214654037_229cd6d830_h.jpg',
        mobile: 'https://live.staticflickr.com/65535/53214654037_ecd7767847_w.jpg',
    },
    {
        title: 'Placeholder 14',
        link: 'https://live.staticflickr.com/65535/53215921134_276d6b969f_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215921134_276d6b969f_w.jpg',
    },
    {
        title: 'Placeholder 15',
        link: 'https://live.staticflickr.com/65535/53215530631_e91f9b419d_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215530631_e91f9b419d_w.jpg',
    },
    {
        title: 'Placeholder 16',
        link: 'https://live.staticflickr.com/65535/53215921124_a4f8ea42ce_h.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215921124_5a3aa61d60_w.jpg',
    },
    {
        title: 'Placeholder 17',
        link: 'https://live.staticflickr.com/65535/53215840063_7fc536b294_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215840063_7fc536b294_w.jpg',
    },
    {
        title: 'Placeholder 18',
        link: 'https://live.staticflickr.com/65535/53215530646_4cd0dc15d1_c.jpg',
        mobile: 'https://live.staticflickr.com/65535/53215530646_4cd0dc15d1_w.jpg',
    },
];
