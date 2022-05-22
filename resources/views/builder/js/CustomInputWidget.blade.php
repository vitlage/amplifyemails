<script>
  class CustomInputWidget extends InputFieldWidget {
    init () {
      this.setButtonHtml(this.getButtonHtml());

      this.setContentHtml(`
        <div builder-element="TextFieldElement">
          <label for="" class="">Label</label>
          <input type=text name='input_name' placeholder="Text input" style="`+ this.getStyle() + `">
        </div>
      `);

      this.setDraggingHtml(this.getButtonHtml());
    }

    getStyle () {
      var id = this.getHtmlId();
      var styles = {
        InputFieldWidget: 'height: 44px;font-size: .875rem;border: 1px solid rgba(150,158,172,.23921568627450981);border-radius: 8px;padding: 0 50px 0 20px;color: #434a55;',
        RoundedInputFieldWidget: 'width: 292px;height: 40px;border: 1px solid rgba(66, 83, 112, 0.3);box-sizing: border-box;border-radius: 100px;text-indent: 10px;',
      };
      return styles[id];
    }

    getButtonHtml () {
      return $("#" + this.getHtmlId()).html()
    }
  }
</script>