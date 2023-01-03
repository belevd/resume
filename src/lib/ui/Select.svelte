<script>
  import ArrowHide from "../../assets/ArrowHide.svelte";

  export let onChange = () => {
    },
    value = {label: ''},
    options = [];

  let isShow = false;
  let select;

  function onBlur (event) {
    if (!event || (event.target !== select && !select.contains(event.target))) {
      isShow = false
      document.removeEventListener('click', onBlur);
    }
  }

  function onFocus () {
    if (isShow) {
      onBlur();
    } else {
      document.addEventListener('click', onBlur, {capture: true});
      isShow = true;

    }
  }

  function handleChange (value) {
    onBlur();
    onChange(value);
  }
</script>

<div bind:this={select} class={`select__wrapper ${$$props.class || ''}`}>
    <div on:click={onFocus} on:keypress={onFocus} class="select">
        {value.label}
        <ArrowHide class={`select__icon ${isShow ? 'select__icon_hide' : ''}`}/>
    </div>
    {#if isShow}
        <div class="select__dropdown">
            {#each options as option}
                <div
                        class="select__option"
                        on:click={() => handleChange(option)}
                        on:keypress={() => handleChange(option)}
                >
                    {option.label}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
  .select {
    border: 1px solid var(--base-medium);
    background: var(--base-strong);
    outline: none;
    font-size: 1em;
    line-height: 1.1;
    padding: 0.5em 1em;
    border-radius: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: default;
  }

  :global(.select__icon) {
    color: var(--base-weak);
    width: 10px;
  }

  :global(.select__icon_hide) {
    rotate: 180deg;
  }

  .select__wrapper {
    position: relative;
    width: 10em;
  }

  .select__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: inherit;
    border: 1px solid var(--base-medium);
    background: var(--base-strong);
    border-radius: 16px;
    overflow: hidden;
    z-index: 10;
  }

  .select__option {
    border-bottom: 1px solid var(--base-medium);
    padding: 0.25em 1em;
    cursor: default;
  }

  .select__option:first-child {
    padding-top: 0.5em;
  }

  .select__option:last-child {
    padding-bottom: 0.5em;
    border-bottom: 0;
  }

  .select__option:hover {
    background: var(--base-medium);
  }
</style>