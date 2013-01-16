/**
 * Copyright 2012 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * bullsfirst/views/PositionSelectedAccountView
 *
 * @author Keith DiMatteo
 */

define(
    [
        'backbone',
        'app/domain/Position',
        'app/domain/Repository',
        'framework/Formatter',
        'framework/MessageBus'
    ],
    function(Backbone, Position, Repository, Formatter, MessageBus) {
        'use strict';

        return Backbone.View.extend({
            initialize: function(/* options */) {
                MessageBus.on('SelectedAccountChanged', function(selectedAccount) {
                    this.accountName = selectedAccount.get('name');
                    this.render();
                }, this);
            },

            render: function(){
                this.$el.html(this.accountName);
                return this;
            }
        });

    }
);