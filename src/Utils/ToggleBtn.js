const ToggleBtn = ({info}) => {
    return (
        <div class="flex items-center w-full mb-12">
            <label for="toogle" class="flex items-center cursor-pointer">
                <div class="relative">
                <input id="toogle" type="checkbox" class="sr-only" />
                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div class="ml-3 text-gray-700 font-medium">
                {info}
                </div>
            </label>
        </div>
    )
}
export default ToggleBtn;