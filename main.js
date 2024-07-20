document.addEventListener('DOMContentLoaded', function () {
	const faders = document.querySelectorAll('.fade-in')

	const appearOptions = {
		threshold: 0,
		rootMargin: '0px 0px -100px 0px',
	}

	const appearOnScroll = new IntersectionObserver(function (
		entries,
		appearOnScroll
	) {
		entries.forEach(function (entry) {
			if (!entry.isIntersecting) {
				return
			} else {
				entry.target.classList.add('show')
				appearOnScroll.unobserve(entry.target)
			}
		})
	},
	appearOptions)

	faders.forEach(function (fader) {
		appearOnScroll.observe(fader)
	})
})
