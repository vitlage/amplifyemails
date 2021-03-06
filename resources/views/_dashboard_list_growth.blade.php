<div class="row">
    <h3 class=" mt-5 pl-0"><i class="icon-address-book2"></i> {{ trans('messages.list_growth') }}</h3>
</div>

@if (Auth::user()->customer->lists()->count() == 0)
    <div class="empty-list custom-box">
        <i class="icon-address-book2"></i>
        <span class="line-1">
            {{ trans('messages.no_saved_lists') }}
        </span>
    </div>
@else
    <div class="">
        <div class="custom-box mb-2">
            @include('helpers.form_control', [
                'type' => 'select',
                'class' => 'dashboard-list-select',
                'name' => 'list_id',
                'label' => '',
                'value' => '',
                'include_blank' => trans('messages.all'),
                'options' => Auth::user()->customer->readCache('MailListSelectOptions', []),
            ])
        </div>
    </div>
    <div id="list-quickview-container" data-url="{{ action("MailListController@quickView") }}"></div>
@endif

<script>
    var DashboardListGrowth = {
        url: '{{ action("MailListController@quickView") }}',

        getContainer: function() {
            return $('#list-quickview-container');
        },

        loadChart: function() {
            $.ajax({
                method: "GET",
                url: DashboardListGrowth.url,
                data: {
                    uid: $('.dashboard-list-select').val(),
                }
            })
            .done(function( response ) {
                DashboardListGrowth.getContainer().html(response);
            });
        }
    }

    $('.dashboard-list-select').on('change', function() {
        DashboardListGrowth.loadChart();
    });

    DashboardListGrowth.loadChart();
</script>