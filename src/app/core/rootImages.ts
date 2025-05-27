const dir = '/images/'

export const rootImages: RootImages = {
    logo: `${dir}tigerz.png`,
    bannerimg: `${dir}bannerimg.png`,
    time: `${dir}time.png`,
    team: `${dir}team.png`,
    pink: `${dir}pink.png`,
}

interface RootImages {
    logo: string
    bannerimg: string
    time: string
    team: string
    pink: string
}