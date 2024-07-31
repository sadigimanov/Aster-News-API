export const uiNewsItem = (item) => {
    return `
        <div class="relative flex flex-col justify-between rounded-[4px] shadow-sm px-[18px] py-[16px] bg-white">
            <a href="#view/${item.slug}" class="absolute inset-0"></a>
            <div class="flex justify-between gap-x-[1px] mb-[8px]">
                <div class="w-full">
                    <h2 class="font-medium text-[17px] text-[#072D4B] mb-[9px]">${item.title}</h2>
                    <p class="text-[14px] text-[#072D4B60]">The reason behind their disappointment is that
                        iPhone users have been.. </p>
                </div>
                <figure class="size-[132px] shrink-0">
                    <img class="size-full object-cover" src="${item.photo}" alt="">
                </figure>
            </div>
            <div class="flex items-center justify-between gap-x-[20px]">
                <div class="flex items-center gap-x-[7px]">
                    <span class="text-[12px] text-[#072D4B40]">Sport Biz</span>
                    <div class="size-[2px] rounded-full bg-[#2F9FF840]"></div>
                    <span class="text-[12px] text-[#072D4B40]">42 mins ago</span>
                </div>
                <div class="flex items-center gap-x-[10px]">
                    <div class="flex items-center cursor-pointer">
                        <figure class="mr-[8px]">
                            <img src="./assets/img/share.svg" alt="">
                        </figure>
                        <span class="text-[12px] text-[#0768B5]">Share</span>
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <figure class="mr-[8px]">
                            <img src="./assets/img/pocket.svg" alt="">
                        </figure>
                        <span class="text-[12px] text-[#0768B5]">Read Later</span>
                    </div>
                </div>
            </div>
        </div>
        `
}