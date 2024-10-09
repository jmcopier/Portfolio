<template>
    <!-- Home screen -->
    <div id="Home" class="bg-radial-gradient h-screen w-screen relative">
        <nav class="absolute w-screen flex justify-evenly items-center px-2 h-[100px] z-10">
            <h2 class="font-mono text-[20px] text-yellow-200"><NuxtLink href="#Home">jessecopier</NuxtLink></h2>
            <ul class="flex gap-10">
                <li class="font-mono text-[20px] text-[#CCD6F6]"><NuxtLink href="#About">/Over mij</NuxtLink></li>
                <li class="font-mono text-[20px] text-[#CCD6F6]"><NuxtLink href="#">/Projecten</NuxtLink></li>
            </ul>
        </nav>
        <div class="left-[200px] top-[200px] absolute">
            <p class="font-mono text-[20px] text-yellow-200">Welkom, mijn naam is</p>
            <h2 class="font-inter text-[80px] text-[#CCD6F6]">Jesse Copier.</h2>
            <h2 class="font-inter text-[70px] text-[#8892B0]">Student Software Development.</h2>
        </div>
    </div>
    <!-- About screen -->
    <div id="About" class="bg-radial-gradient h-screen w-screen relative">
        <div class="left-[200px] top-[200px] absolute">
            <p class="font-mono text-[20px] text-yellow-200">Over mij</p>
        </div>
    </div>
</template>