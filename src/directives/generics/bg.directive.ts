export default function(el: HTMLElement, binding: any) {
    el.style.backgroundColor = binding.value
    console.log(el, binding)
}