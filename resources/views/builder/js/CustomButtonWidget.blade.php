<script>
  class CustomButtonWidget extends ButtonWidget {
    getHtmlId() {
      return "CustomButtonWidget";
    }

    init() {
      this.setButtonHtml(`
                <div class="_1content widget-text">
                    <div class="panel__body woo-panel__body" title="{{ trans('messages.automation.button.rounded') }}">
                        <div class="image-drag">
                            <div ng-bind-html="::getModuleIcon(module)" class="ng-binding product-list-widget">
                                <img builder-element src="{{ url('images/primary-button.svg') }}" width="100%" />
                            </div>
                        </div>
                        <div class="body__title">{{ trans('messages.automation.button.rounded') }}</div>
                    </div>
                </div>
            `);

      this.setContentHtml(`
        <button id="`+this.id+`" builder-element="ButtonElement" builder-inline-edit="" class="`+ this.getClass() + `">Button</button>
      `);

      this.setDraggingHtml(this.getButtonHtml());
    }

    getClass () {
      return `button-round`
    }
  }
</script>