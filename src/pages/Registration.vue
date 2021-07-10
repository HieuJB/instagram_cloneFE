<template>
<div class="h-screen bg-gray-100">
    <div class="w-full mx-auto pt-14 ">
        <div class="bg-white max-w-xs rounded-xl border shadow mx-auto flex flex-col items-center">
            <img class="w-1/2 pt-4 pb-2" src="../images/okmen.png">
            
            <a class="text-gray-500 pb-2 font-medium text-sm" href="">Đăng ký để xem ảnh và video từ bạn bè</a>
            <div class="w-11/12 mt-2 py-2  mx-auto text-xs flex flex-col justify-center">
                <div class="flex justify-center ">
                    <unicon class="pt-1" name="facebook-f" fill="blue" icon-style="monochrome" />
                    <a href="" class="pt-2 text-blue-500  cursor-pointer font-medium hover:text-blue-600 ">Đăng nhập bằng Facebook</a>
                </div>
                <div class="flex justify-center">
                    <a class=" pt-1" href="">
                        <unicon class="" name="google" fill="blue" icon-style="monochrome" /></a>
                    <a href="" class="pt-2 text-blue-500  cursor-pointer font-medium hover:text-blue-600 ">Đăng nhập bằng Google</a>
                </div>
                <p class="text-center text-gray-300">━━━━━━━━━━━━━━━━ OR ━━━━━━━━━━━━━━━━</p>
            </div>
            <div class="w-11/12">
                <form class="w-full text-center" @submit.prevent="handleRegistration" method="POST">
                    <input v-model="data.userName" class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="text" placeholder="Tên người dùng">
                    <p class="text-red-400 text-xs float-left px-3 pt-1" v-if="showNotification.name">{{showNotification.name[0]}}</p>
                    <input v-model="data.email" class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="text" placeholder="Số điện thoại hoặc email">
                    <p class="text-red-400 text-xs float-left px-3 pt-1" v-if="showNotification.email">{{showNotification.email[0]}}</p>
                    <input v-model="data.password" class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="password" placeholder="Mật khẩu">
                    <p class="text-red-400 text-xs float-left px-3 pt-1" v-if="showNotification.password">{{showNotification.password[0]}}</p>
                    <button class="border bg-blue-500 rounded w-11/12 mt-2 py-2 text-white text-xs hover:bg-blue-600">Đăng ký</button>
                </form>
            </div>
            <div class="w-11/12 text-xs py-4">
                <p class="text-center text-gray-500 px-4">Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi.</p>
            </div>
        </div>
        <div class="max-w-xs mx-auto bg-white  rounded border shadow mt-4 flex justify-center ">
            <p class="text-xs p-4">Bạn có tài khoản?<router-link class="text-blue-500 hover:text-blue-600 font-medium" to="/"> Đăng nhập</router-link>
            </p>
        </div>
        <div class="max-w-xs py-4 text-xs text-gray-600 mx-auto flex justify-center">
            <p>Tải ứng dụng</p>
        </div>
        <div class="max-w-xs mx-auto flex justify-center ">
            <img class="w-5/12 px-1" src="../images/apple.png">
            <img class="w-5/12 px-1" src="../images/android.png">
        </div>
    </div>
    <div v-if="showOverlay" wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
        <p class="w-1/3 text-center text-white">Hệ thống đang xử lý thông tin đăng ký của bạn...</p>
    </div>
</div>

</template>
<script>
import { computed,reactive } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'Registration',
    setup() {
        const store = useStore();
        const showNotification = computed(() => store.state.auth.notification_error);
        const showOverlay = computed(() => store.state.auth.mail);

        const data = reactive({
            userName: '',
            email: '',
            password: '',
            isHidden:false
        });

        const handleRegistration = () => {
            store.dispatch("handleRegistraion", {
                name: data.userName,
                email: data.email,
                password: data.password,
            });
            data.isHidden=true;
        };
        
        return {
            data,
            handleRegistration,
            showNotification,
            showOverlay
        }
        
    },
}
</script>

<style scoped>
.loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
