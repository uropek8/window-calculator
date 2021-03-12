<template>
	<div class="min-h-screen bg-gray-300 pt-10 pb-10">
		<div class="max-w-6xl mx-auto px-5">
			<h3 class="text-black font-sans text-4xl mb-8">Калькулятор окон REHAU</h3>
			<div class="w-full bg-white">
				<div class="flex items-center py-6 px-5 border-b-4 border-gray-200">
					<p class="text-black font-sans text-2xl mr-10 bor">
						<span class="text-green-500 font-sans text-2xl">1.</span>
						&nbsp;Конструкция:
					</p>
					<ul class="flex">
						<li
							class="cursor-pointer mr-6 last:mr-0"
							v-for="(icon, idx) in icons"
							:key="icon"
						>
							<img
								class="max-h-14 border-2 border-transparent"
								:class="{ 'border-red-500': idx === activeIdx }"
								:src="getIconSrc(icon)"
								@click="handleActiveIcon(idx)"
								alt="{{ icon }}"
							/>
						</li>
					</ul>
				</div>
				<div class="flex">
					<div class="flex flex-col w-3/6 border-r-4 border-gray-200">
						<div class="flex py-6 px-5 border-b-4 border-gray-200">
							<div class="flex flex-col mr-7">
								<p class="text-black font-sans text-2xl mb-4">
									<span class="text-green-500 font-sans text-2xl">2.</span>
									&nbsp;Что рассчитать?
								</p>
								<select
									class="border-2 border-gray-100 focus:ring-0"
									v-model="product"
								>
									<option v-for="p in productsList" :key="p">{{ p }}</option>
								</select>
							</div>
							<div class="flex flex-col flex-grow">
								<p class="text-black font-sans text-2xl mb-4">
									<span class="text-green-500 font-sans text-2xl">3.</span>
									&nbsp;Выберите тип:
								</p>
								<select
									class="border-2 border-gray-100 focus:ring-0"
									v-model="type"
								>
									<option v-for="t in typesList" :key="t">
										{{ t }}
									</option>
								</select>
							</div>
						</div>
						<div class="py-6 px-5">
							<p class="text-black font-sans text-2xl mb-4">
								<span class="text-green-500 font-sans text-2xl">4.</span>
								&nbsp;Параметры
							</p>
							<div class="mb-5">
								<div class="flex items-center justify-between">
									<span class="text-black font-sans text-sm font-light"
										>Система окон:</span
									>
									<div class="max-w-xs w-full">
										<select
											class="w-full border-2 border-gray-100 focus:ring-0"
											v-model="system"
										>
											<option
												v-for="(val, name) in systems"
												:key="name"
												:data-price="val"
												>{{ name }}</option
											>
										</select>
									</div>
								</div>
							</div>
							<p class="text-black font-sans text-2xl mb-4">
								<span class="text-green-500 font-sans text-2xl">5.</span>
								&nbsp;Дополнительные опции
							</p>
							<div class="mb-5">
								<div class="flex items-center justify-between">
									<span class="text-black font-sans text-sm font-light">{{
										packet
									}}</span>
									<div class="max-w-xs w-full">
										<select
											class="w-full border-2 border-gray-100 focus:ring-0"
										>
											<option
												v-for="(val, name) in packets"
												:key="val"
												:data-percent="name"
												>{{ val }}</option
											>
										</select>
									</div>
								</div>
							</div>
							<div class="mb-5">
								<div class="flex items-center justify-between">
									<span class="text-black font-sans text-sm font-light">{{
										sill
									}}</span>
									<div class="max-w-xs w-full">
										<select
											class="w-full border-2 border-gray-100 focus:ring-0"
										>
											<option
												v-for="(val, name) in sills"
												:key="val"
												:data-percent="name"
												>{{ val }}</option
											>
										</select>
									</div>
								</div>
							</div>
							<div class="mb-5">
								<div class="flex items-center justify-between">
									<span class="text-black font-sans text-sm font-light">{{
										reflux
									}}</span>
									<div class="max-w-xs w-full">
										<select
											class="w-full border-2 border-gray-100 focus:ring-0"
										>
											<option
												v-for="(val, name) in refluxes"
												:key="val"
												:data-percent="name"
												>{{ val }}</option
											>
										</select>
									</div>
								</div>
							</div>
							<div>
								<div class="flex items-center justify-between">
									<span class="text-black font-sans text-sm font-light">{{
										lamination
									}}</span>
									<div class="max-w-xs w-full">
										<select
											class="w-full border-2 border-gray-100 focus:ring-0"
										>
											<option
												v-for="(val, name) in laminations"
												:key="val"
												:data-percent="name"
												>{{ val }}</option
											>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col w-3/6">
						<div class="py-6 px-5">
							<p class="text-black font-sans text-2xl mb-4">
								<span class="text-green-500 font-sans text-2xl">6.</span>
								&nbsp;Задайте параметры
							</p>
							<div class="pt-5 pb-14">
								<img
									class="max-h-60 mx-auto"
									:src="getIconSrc(imgSrc)"
									alt=""
								/>
							</div>
							<div class="flex justify-between mb-6">
								<div>
									<p class="text-black font-sans font-light text-sm mb-1">
										Цена выбранного окна:&nbsp;
										<span class="text-black font-sans font-normal text-sm"
											>{{ totalPrice }} рублей</span
										>
									</p>
									<p class="text-black font-sans font-light text-sm mb-1">
										Монтаж:&nbsp;
										<span class="text-black font-sans font-normal text-sm"
											>{{ mountPrice }} рублей</span
										>
									</p>
									<p class="text-black font-sans font-light text-sm">
										Отделка:&nbsp;
										<span class="text-black font-sans font-normal text-sm"
											>{{ furnishPrice }} рублей</span
										>
									</p>
								</div>
								<button
									class="cursor-pointer bg-red-500 px-6 text-white font-sans font-normal text-2xl"
									type="button"
								>
									Заказать
								</button>
							</div>
							<p class="text-black font-sans font-light text-xs">
								<b>Важно:</b> калькулятор показывает ориентировочные цены на
								пластиковые окна по заданному размеру без учета доставки до
								адреса заказчика. Цены на сайте указаны с учётом всех
								действующих скидок и спецпредложений.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import products from "./assets/js/price.json";
import optionsData from "./assets/js/options.json";

export default {
	name: "App",

	data() {
		return {
			product: "окна",
			type: "1-створчатые",
			system: "Blitz new",
			packet: "Стеклопакет",
			sill: "Ширина подоконника",
			reflux: "Ширина отлива",
			lamination: "Ламинация",
			imgSrc: "i_1_1.png",

			icons: [],
			systems: {},
			packets: {},
			sills: {},
			refluxes: {},
			laminations: {},

			totalPrice: 0,
			mountPrice: 0,
			furnishPrice: 0,

			productsList: [],
			typesList: [],

			activeIdx: 0
		};
	},

	async created() {
		this.productsList = [...new Set(products.map((p) => p.product))];

		const forTypeList = products.filter(
			(p) => p.product === this.productsList[0]
		);
		this.typesList = [...new Set(forTypeList.map((t) => t.type))];

		const forConstructList = forTypeList.filter((t) => t.type === this.type);
		this.icons = [...new Set(forConstructList.map((c) => c.iconSrc))];

		this.systems = forConstructList[0].systems;

		this.packets = optionsData.find(
			(item) => item.product === this.packet
		).value;
		this.sills = optionsData.find((item) => item.product === this.sill).value;
		this.refluxes = optionsData.find(
			(item) => item.product === this.reflux
		).value;
		this.laminations = optionsData.find(
			(item) => item.product === this.lamination
		).value;
		// console.log(this.packets);
	},

	// computed: {

	// },

	methods: {
		// handleProduct() {
		// 	console.log(this.$refs.type.value);
		// },

		// handleType() {
		// 	console.log(this.$refs.product.value);
		// },

		getIconSrc(icon) {
			return require(`./assets/img/win/${icon}`);
		},

		handleActiveIcon(idx) {
			this.activeIdx = idx;
		},
	},
};
</script>
