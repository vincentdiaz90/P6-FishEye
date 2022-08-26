class FilterForm{

    createFilter() {
        const $wrapper = document.createElement('div');
        $wrapper.setAttribute('class', 'filter-form')

        const filterForm = `
            <form class="filter-form" action="#" method="POST">
                <label for="filter-select" id="label-filter-form">Trié par : </label>
                <select name="filter-select" id="filter-select">
                    <option value="popularite">Popularité</option>
                    <option value="date">Date</option>
                    <option value="titre">Titre</option>
                </select>
            </form>
        `
        $wrapper.innerHTML = filterForm
        return $wrapper

    }
}