import Player from '@vimeo/player'

let pid = 0

export const VimeoPlayer = {
    props: {
        height: {
            default: 480
        },
        width: {
            default: 640
        },
        options: {
            default: {}
        },
        videoId: {
            required: true
        },
        loop: {
            default: false
        },
        autoplay: {
            default: false
        }
    },
    template: '<div><div :id="elementId"></div></div>',
    watch: {
        videoId: 'update'
    },
    data() {
        pid += 1

        return {
            elementId: `vimeo-player-${pid}`,
            player: null
        }
    },
    methods: {
        update(videoId){
            this.player.loadVideo(videoId)
        },
        setSize(){
            console.log('setSize')
        },
        setEvents(){
            const vm = this

            this.player.on('play', function (data) {
                vm.$emit('play', data)
            })

            this.player.on('pause', function (data) {
                vm.$emit('pause', data)
            })

            this.player.on('ended', function (data) {
                vm.$emit('ended', data)
            })

            this.player.on('timeupdate', function (data) {
                vm.$emit('timeupdate', data)
            })

            this.player.on('progress', function (data) {
                vm.$emit('progress', data)
            })

            this.player.on('progress', function (data) {
                vm.$emit('progress', data)
            })

            this.player.on('seeked', function (data) {
                vm.$emit('seeked', data)
            })

            this.player.on('texttrackchange', function (data) {
                vm.$emit('texttrackchange', data)
            })

            this.player.on('texttrackchange', function (data) {
                vm.$emit('texttrackchange', data)
            })

            this.player.on('cuechange', function (data) {
                vm.$emit('cuechange', data)
            })

            this.player.on('volumechange', function (data) {
                vm.$emit('volumechange', data)
            })

            this.player.on('error', function (data) {
                vm.$emit('error', data)
            })

            this.player.on('loaded', function (data) {
                vm.$emit('loaded', data)
            })

        }
    },
    ready() {

        let options = {
            id: this.videoId,
            width: this.width,
            height: this.height,
            loop: this.loop,
            autoplay: this.autoplay
        }

        this.player = new Player(this.elementId, Object.assign(options, this.options))

        this.setEvents()

    },
    beforeDestroy() {
        this.player.unload()
    }
}

export function install(Vue) {
    Vue.component('vimeo', VimeoPlayer)
}

export default {
    VimeoPlayer, install
}