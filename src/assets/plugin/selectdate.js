import { formaterDate } from '@/assets/plugin/format'
import { format } from '@/assets/plugin/fomattertime'

export function selectDate(options1, value6, booler, disable, startTime, endTime, val) {
	return (
		let objDate = {};
		objDate = options1.find(function(a) {
			return a.value === val
		})
		if(objDate.value == 1) {
			value6 = format(1)
			if(booler) {
				booler = !booler
			}
		}
		if(objDate.value == 2) {
			value6 = format(0)
			if(booler) {
				booler = !booler
			}
			//		return booler;
			console.log(booler)
		}
		if(objDate.value == 3) {
			if(booler == "true") {} else {
				booler = true
			}
			disable = true
			startTime = formaterDate().getWeekStartDate();
			endTime = formaterDate().getWeekEndDate()

		}
		if(objDate.value == 4) {
			if(booler == "true") {

			} else {
				booler = true
			}
			disable = true
			startTime = formaterDate().getMonthStartDate()
			endTime = formaterDate().getMonthEndDate()

		}
		if(objDate.value == 5) {
			if(booler == "true") {

			} else {
				booler = true
			}
			disable = false
		}
	)

}