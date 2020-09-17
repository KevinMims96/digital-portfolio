$(document).ready(() => {
  $(".drop-btn").on("click", () => {
      $(".dropdown-content").slideToggle(250)
  })

  $(".first-d-dropdown").on("click", () => {
      $(".first-description").slideToggle()
  })

  $(".second-d-dropdown").on("click", () => {
    $(".second-description").slideToggle()
})

$(".third-d-dropdown").on("click", () => {
    $(".third-description").slideToggle()
})
})