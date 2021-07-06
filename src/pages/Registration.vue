<template>

<div class="h-screen bg-gray-50">
    <div class="w-full mx-auto pt-14 ">
        <div class="bg-white max-w-xs rounded border shadow mx-auto flex flex-col items-center">
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
                <form class="w-full text-center">
                    <input class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="text" placeholder="Số điện thoại, tên người dùng hoặc email">
                    <input class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="password" placeholder="Mật khẩu">
                    <input class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="text" placeholder="Số điện thoại, tên người dùng hoặc email">
                    <input class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="password" placeholder="Mật khẩu">
                    <button class="border bg-blue-500 rounded w-11/12 mt-2 py-2 text-white text-xs hover:bg-blue-600">Đăng nhập</button>
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

</div>
</template>

<script>
export default {
    name: 'Registration',
    setup() {
        return {

        }
    }

}
</script>

<style>
</style>
