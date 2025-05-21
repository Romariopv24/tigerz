const dir = '/images/'

export const rootImages: RootImages = {
    logo: `${dir}tigerz.png`,
    bannerimg: `${dir}bannerimg.png`,
}

interface RootImages {
    logo: string
    bannerimg: string
}