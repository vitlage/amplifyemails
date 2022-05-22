<script>
    class RadioIosFieldElement extends TextFieldElement {
      getControls() {
        var e = this;
        return [
          new FieldListHeaderControl(e.obj.find("label").html(), currentEditor.listName ? currentEditor.listName : "Select List"),
          new CustomCommonFieldControl(getI18n("common_field"), {
            fieldName: e.obj.find("input").attr("name"),
            label: e.obj.find("span").html(),
            labelShowed: e.obj.find("span").is(":visible"),
            id: e.obj.find("input").attr("id"),
            icon: "text_format"
          }, (function (t) {
            e.obj.find("input").attr("name", t.fieldName), e.obj.find("span").html(t.label), t.labelShowed ? e.obj.find("span").fadeIn(100, (function () {
              e.select()
            })) : e.obj.find("span").fadeOut(100, (function () {
              e.select()
            })),
              e.obj.find("input").attr("id", t.id)
          })),
          new PlaceholderControl(getI18n("placeholder"), {placeholder: e.obj.find("input").attr("placeholder")}, (function (t) {
            e.obj.find("input").attr("placeholder", t.placeholder)
          })),
          new ValidationControl(getI18n("validation"), {
            required: e.obj.find("input").attr("required"),
            minLength: e.obj.find("input").attr("data-min-length") ? e.obj.find("input").attr("data-min-length") : 1,
            maxLength: e.obj.find("input").attr("data-max-length") ? e.obj.find("input").attr("data-max-length") : "",
            regexp: e.obj.find("input").attr("data-regexp") ? e.obj.find("input").attr("data-regexp") : ""
          }, (function (t) {
            t.required ? e.obj.find("input").prop("required", !0) : e.obj.find("input").removeAttr("required"), e.obj.find("input").attr("data-min-length", t.minLength), e.obj.find("input").attr("data-max-length", t.maxLength), e.obj.find("input").attr("data-regexp", t.regexp)
          })),
          new ColorPickerControl(getI18n("text_color"), e.obj.css("color"), (function (t) {
            e.obj.css("color", t)
          })),
          new LineHeightControl(getI18n("line_height"), e.obj.css("line-height"), (function (t) {
            e.obj.css("line-height", t), e.select()
          })),
          new TextSizeControl(getI18n("text_size"), e.obj.css("font-size"), (function (t) {
            e.obj.css("font-size", t), e.obj.find("*").css("font-size", t), e.select()
          })),
          new TextStyleControl(getI18n("text_style"), {
            font_weight: e.obj.css("font-weight"),
            text_decoration: e.obj.css("text-decoration"),
            font_style: e.obj.css("font-style")
          }, (function (t) {
            e.obj.css("font-weight", t.font_weight), e.obj.css("font-style", t.font_style), e.obj.css("text-decoration", t.text_decoration), e.select()
        })),
          new FontFamilyControl(getI18n("font_family"), e.obj.css("font-family"), (function (t) {
            e.obj.css("font-family", t), e.select()
          })),
          new BlockOptionControl(getI18n("padding"), {
            padding: e.obj.css("padding"),
            top: e.obj.css("padding-top"),
            bottom: e.obj.css("padding-bottom"),
            right: e.obj.css("padding-right"),
            left: e.obj.css("padding-left")
          }, (function (t) {
            e.obj.css("padding", t.padding), e.obj.css("padding-top", t.top), e.obj.css("padding-bottom", t.bottom), e.obj.css("padding-right", t.right), e.obj.css("padding-left", t.left), e.select()
          }))
        ]
      }
    }
</script>
