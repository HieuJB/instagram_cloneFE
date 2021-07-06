<template>
<div class="h-screen bg-gray-50">
    <div class="lg:flex">
        <div class="hidden lg:block w-1/2 mt-10">
            <img class="max-w-md h-4/5 float-right py-4" src="../images/phone.png">
        </div>
        <div class="w-full lg:w-1/2 pt-14">
            <div class="max-w-md mx-auto lg:mx-0  bg-white lg:max-w-xs rounded border shadow">
                <img class="w-1/2 mx-auto py-4" src="../images/okmen.png">
                <div class="w-11/12 mx-auto">
                    <form class="w-full text-center">
                        <input class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="text" placeholder="Số điện thoại, tên người dùng hoặc email">
                        <input class="border bg-gray-50 rounded w-11/12 mt-2 py-2 text-gray-600 text-xs pl-2 focus:outline-none focus:border-purple-500" type="password" placeholder="Mật khẩu">
                        <button class="border bg-blue-500 rounded w-11/12 mt-2 py-2 text-white text-xs hover:bg-blue-600">Đăng nhập</button>
                    </form>
                    <div class="w-11/12 mt-2 py-2  mx-auto text-xs flex flex-col justify-center">
                        <p class="text-center text-gray-300">━━━━━━━━━━━━━━━━ OR ━━━━━━━━━━━━━━━━</p>
                        <div class="flex justify-center ">
                            <unicon class="pt-1" name="facebook-f" fill="blue" icon-style="monochrome" />
                            <a href="" class="pt-2 text-blue-500  cursor-pointer font-medium hover:text-blue-600 ">Đăng nhập bằng Facebook</a>
                        </div>
                        <div class="flex justify-center ">
                            <a class=" pt-1" href="">
                                <unicon class="" name="google" fill="blue" icon-style="monochrome" /></a>
                            <a href="" class="pt-2 text-blue-500  cursor-pointer font-medium hover:text-blue-600 ">Đăng nhập bằng Google</a>
                        </div>
                        <a href="" class="text-center text-blue-500 py-2 cursor-pointer hover:text-blue-600">Quên mật khẩu?</a>
                    </div>
                </div>
            </div>
            <div class="max-w-md mx-auto lg:mx-0 bg-white lg:max-w-xs rounded border shadow mt-4">
                <div class="flex justify-center text-xs p-4">
                    <p class="">Bạn không có tài khoản?<router-link class="text-blue-500 hover:text-blue-600 font-medium" to="/registration"> Đăng ký</router-link>
                    </p>
                </div>
            </div>
            <div class="max-w-md mx-auto lg:mx-0 lg:max-w-xs flex justify-center py-4 text-xs text-gray-600">
                <p>Tải ứng dụng</p>
            </div>
            <div class="max-w-md mx-auto lg:mx-0 lg:max-w-xs flex justify-center">
                <img class="w-5/12 px-1" src="../images/apple.png">
                <img class="w-5/12 px-1" src="../images/android.png">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    setup() {
        return {

        }
    }

}
</script>

<style>
</style>
