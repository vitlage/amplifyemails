<script>
    class NpsScoreWidget extends Widget {
      getHtmlId() {
        return "NpsScoreWidget";
      }

      init() {
        this.setButtonHtml(`
                <div class="_1content widget-text">
                    <div class="panel__body woo-panel__body" title="{{ trans('messages.automation.nps.score') }}">
                        <div class="image-drag">
                            <div ng-bind-html="::getModuleIcon(module)" class="ng-binding product-list-widget">
                                 <i class="fa fa-grin-stars" style="font-size:28px;display:inline-block"></i>
                            </div>
                        </div>
                        <div class="body__title">{{ trans('messages.automation.nps.score') }}</div>
                    </div>
                </div>
            `);

        this.setContentHtml(`
                <div id="`+this.id+`" builder-element="BlockElement" class="container-nps">
                  <div class="element">1</div>
                  <div class="element">2</div>
                  <div class="element">3</div>
                  <div class="element">4</div>
                  <div class="element">5</div>
                  <div class="element">6</div>
                  <div class="element">7</div>
                  <div class="element">8</div>
                  <div class="element">9</div>
                  <div class="element">10</div>
                </div>
            `);

        this.setDraggingHtml(this.getButtonHtml());
      }
    }
</script>
