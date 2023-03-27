export default defineNuxtRouteMiddleware((to, from) => {
    console.log('from', from);
    console.log('to', to);
    // rootからaboutに行けなくした。（aboutに設定してあるため)
    if (from.fullPath === '/') {
        return navigateTo('/');
        // return abortNavigation();
    }
      //isAdmin関数はアクセスしているユーザが管理者かどうかチェックする関数です
    if (isAdmin() === false) {
        return navigateTo('/login')
    }
});

//dummy
function isAdmin() {
    return true
}

