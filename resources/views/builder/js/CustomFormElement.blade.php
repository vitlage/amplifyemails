<script>
    class CustomFormElement extends FormElement {
      getControls() {
        var e = this;
        return [new SectionTitleControl(getI18n("form_options")), new CaptchaToggleControl(getI18n("captcha"), e.obj.attr("data-captcha"), (function (t) {
          e.obj.attr("data-captcha", t)
        })), new FormControl(getI18n("captcha"), {
          method: e.obj.attr("method") ? e.obj.attr("method") : "GET",
          autocomplete: e.obj.attr("autocomplete") ? e.obj.attr("autocomplete") : "on",
          accept_charset: e.obj.attr("accept-charset") ? e.obj.attr("accept-charset") : "",
          enctype: e.obj.attr("enctype") ? e.obj.attr("enctype") : ""
        }, (function (t) {
          e.obj.attr("method", t.method), e.obj.attr("autocomplete", t.autocomplete), e.obj.attr("accept-charset", t.accept_charset), e.obj.attr("enctype", t.enctype)
        })), new BackgroundControl(getI18n("background"), {color: e.obj.css("background-color")}, (function (t) {
          e.obj.css("background-color", t.color), e.isWrapper() && e.obj.closest("body").css("background-color", t.color)
        })), new ColorPickerControl(getI18n("text_color"), e.obj.css("color"), (function (t) {
          e.obj.css("color", t)
        })), new LineHeightControl(getI18n("line_height"), e.obj.css("line-height"), (function (t) {
          e.obj.css("line-height", t), e.select()
        })), new TextSizeControl(getI18n("text_size"), e.obj.css("font-size"), (function (t) {
          e.obj.css("font-size", t), e.obj.find("*").css("font-size", t), e.select()
        })), new TextStyleControl(getI18n("text_style"), {
          font_weight: e.obj.css("font-weight"),
          text_decoration: e.obj.css("text-decoration"),
          font_style: e.obj.css("font-style")
        }, (function (t) {
          e.obj.css("font-weight", t.font_weight), e.obj.css("font-style", t.font_style), e.obj.css("text-decoration", t.text_decoration), e.select()
        })), new FontFamilyControl(getI18n("font_family"), e.obj.css("font-family"), (function (t) {
          e.obj.css("font-family", t), e.select()
        })), new BackgroundImageControl(getI18n("background_image"), {
          image: e.obj.css("background-image"),
          color: e.obj.css("background-color"),
          repeat: e.obj.css("background-repeat"),
          position: e.obj.css("background-position"),
          size: e.obj.css("background-size")
        }, {
          setBackgroundImage: function (t) {
            e.obj.css("background-image", t)
          }, setBackgroundColor: function (t) {
            e.obj.css("background-color", t)
          }, setBackgroundRepeat: function (t) {
            e.obj.css("background-repeat", t)
          }, setBackgroundPosition: function (t) {
            e.obj.css("background-position", t)
          }, setBackgroundSize: function (t) {
            e.obj.css("background-size", t)
          }
        }), new BlockOptionControl(getI18n("padding"), {
          padding: e.obj.css("padding"),
          top: e.obj.css("padding-top"),
          bottom: e.obj.css("padding-bottom"),
          right: e.obj.css("padding-right"),
          left: e.obj.css("padding-left")
        }, (function (t) {
          e.obj.css("padding", t.padding), e.obj.css("padding-top", t.top), e.obj.css("padding-bottom", t.bottom), e.obj.css("padding-right", t.right), e.obj.css("padding-left", t.left), e.select()
        })), new AlignmentControl("alignment", {align: this.getAlignForButton(e.obj.children().css("justify-content"))}, {
          setAlign: function (t) {
            var aliases = {
              'right': 'flex-end',
              'left': 'flex-start',
            }
            console.log(t), e.obj.children().css("justify-content", aliases[t] || t)
          }})]
      }

      getAlignForButton(value) {
        var aliases = {
          'flex-end': 'right',
          'flex-start': 'left',
        }

        return aliases[value] || value
      }
    }
</script>
