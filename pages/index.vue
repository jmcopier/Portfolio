<template>
    <!-- Home screen -->
    <div id="Home" class="bg-radial-gradient h-screen w-screen relative">
        <nav class="absolute w-screen flex justify-evenly items-center px-2 h-[100px] z-10">
            <h2 class="font-mono text-[20px] text-jesse">
                <NuxtLink href="#Home">jessecopier</NuxtLink>
            </h2>
            <ul class="flex gap-10">
                <li class="font-mono text-[20px] text-primary">
                    <NuxtLink href="#About">/Over mij</NuxtLink>
                </li>
                <li class="font-mono text-[20px] text-primary">
                    <NuxtLink href="#Projects">/Projecten</NuxtLink>
                </li>
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
            <p class="font-inter text-20px text-secondary">Hey! Mijn naam is Jesse Copier, student Software Development
                op het Koning Willem I College.</p>
        </div>
        <div class="w-[400px]">
            <div class="relative shadow-framed">
                <img class="grayscale" src="/public/images/portrait.jpg" alt="Portrait of me :)">
            </div>
        </div>
    </div>
    <!-- Projects screen -->
    <div id="Projects" class="bg-radial-gradient h-screen w-screen">
        <h2 class="text-primary font-bold font-inter text-[32px] pb-[200px] pt-[50px] text-center">Projecten</h2>
        <div class="grid grid-cols-3 gap-10 mx-[100px]">
            <!-- Card -->
            <div
                class="p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg w-[500px] h-[200px]">
                <div class="bg-radial-gradient p-6 rounded-lg w-full h-full flex flex-col">
                    <h3 class="text-xl font-bold text-primary font-inter">Portfolio</h3>
                    <p class="text-secondary font-inter">De portfolio website waar je nu op zit! Gemaakt met behulp van
                        Nuxt en Tailwind CSS.</p>
                    <div class="flex-grow"></div>
                    <div class="flex justify-between items-center">
                        <a class="text-secondary hover:text-jesse font-inter"
                            href="https://github.com/jmcopier/Portfolio" target="_blank">
                            <!-- GitHub SVG Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-6 h-6 inline mr-2 fill-current text-primary hover:text-jesse">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>

                        <span class="text-sm font-inter">
                            <span class="text-[#41b883] mr-4">• Vue</span>
                            <span class="text-[#f1e05a] mr-4">• Javascript</span>
                            <span class="text-[#3178c6] mr-4">• TypeScript</span>
                            <span class="text-[#663399]">• Tailwind CSS</span>
                        </span>
                    </div>
                </div>
            </div>
            <!-- Card -->
            <div
                class="p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg w-[500px] h-[200px]">
                <div class="bg-radial-gradient p-6 rounded-lg w-full h-full flex flex-col">
                    <h3 class="text-xl font-bold text-primary">Binnenkort meer...</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>