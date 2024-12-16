<template>
    <!-- Home screen -->
    <div id="Home" class="bg-radial-gradient h-screen w-screen relative">
        <nav class="absolute w-screen flex justify-evenly items-center px-2 h-[100px] z-10">
            <h2 class="font-mono text-[20px] text-jesse"><NuxtLink href="#Home">jessecopier</NuxtLink></h2>
            <ul class="flex gap-10">
                <li class="font-mono text-[20px] text-primary"><NuxtLink href="#About">/Over mij</NuxtLink></li>
                <li class="font-mono text-[20px] text-primary"><NuxtLink href="#">/Projecten</NuxtLink></li>
            </ul>
        </nav>
        <div class="left-[200px] top-[200px] absolute">
            <p class="font-mono text-[20px] text-jesse">Welkom, mijn naam is</p>
            <h2 class="font-inter text-[80px] text-primary">Jesse Copier.</h2>
            <h2 class="font-inter text-[70px] text-secondary">Student Software Development.</h2>
        </div>
    </div>
    <!-- About screen -->
    <div id="About" class="bg-radial-gradient h-screen w-screen flex justify-around items-center px-[200px]">
        <div class="w-[400px]">
            <p class="mb-5 font-inter font-bold text-[32px] text-primary">Over mij</p>
            <p class="font-inter text-20px text-secondary">Hey! Mijn naam is Jesse Copier, student Software Development op het Koning Willem I College.</p>
        </div>
        <div class="w-[400px]">
            <div class="relative shadow-framed">
                <img class="grayscale" src="/public/images/portrait.jpg" alt="Portrait of me :)">
            </div>
        </div>
    </div>
</template>