@extends('layouts.core.frontend')

@section('title', $campaign->name)

@section('page_header')

    @include("campaigns._header")

@endsection

@section('content')

@include("campaigns._menu")

<h2 class="text-semibold text-primary">{{ trans('messages.feedback_log') }}</h2>

<form class="listing-form custom-box1"
        data-url="{{ action('CampaignController@feedbackLogListing', $campaign->uid) }}"
        per-page="{{ Acelle\Model\FeedbackLog::$itemsPerPage }}"
    >
        <div class="d-flex top-list-controls top-sticky-content">
            <div class="me-auto">
                @if ($items->count() >= 0)
                    <div class="filter-box">
                        <span class="filter-group">
                            <span class="title text-semibold text-muted">{{ trans('messages.sort_by') }}</span>
                            <select class="select" name="sort_order">
                                <option value="created_at">{{ trans('messages.created_at') }}</option>
                            </select>
                            <input type="hidden" name="sort_direction" value="desc" />
<button type="button" class="btn btn-light sort-direction" data-popup="tooltip" title="{{ trans('messages.change_sort_direction') }}" role="button" class="btn btn-xs">
                                <span class="material-icons-outlined desc">
sort
</span>
                            </button>
                        </span>
                        <span class="text-nowrap">
                            <input type="text" name="keyword" class="form-control search" value="{{ request()->keyword }}" placeholder="{{ trans('messages.type_to_search') }}" />
                            <span class="material-icons-round">
search
</span>
                        </span>
                    </div>
                @endif
            </div>
            <div class="text-end">
                <a href="javascript:goToDownLoad('feedback_logs')" role="button" class="btn btn-secondary">
                    <i class="icon icon-download me-1"></i> {{ trans('messages.feedback_log.download') }}
                </a>
            </div>
        </div>

        <div class="pml-table-container"></div>
    </form>

    <script>
        var CampaignLogIndex = {
            getList: function() {
                return makeList({
                    url: '{{ action('CampaignController@feedbackLogListing', $campaign->uid) }}',
                    container: $('.listing-form'),
                    content: $('.pml-table-container')
                });
            }
        };

        $(function() {
            CampaignLogIndex.getList().load();
        });
    </script>
@endsection
