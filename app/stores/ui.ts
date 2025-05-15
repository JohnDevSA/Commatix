export const useUiStore = defineStore('ui', {
    state: () => ({ showSidebar: true }),
    actions: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar
        }
    }
})